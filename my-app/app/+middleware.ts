import type { MiddlewareFunction } from "expo-router/server";
import { createClient } from "@supabase/supabase-js";

export const unstable_settings = {
  matcher: {
    patterns: ["/api/(.*)"],
  },
};

const middleware: MiddlewareFunction = async (request) => {
  const token = request.headers.get("authorization")?.replace("Bearer ", "");

  if (!token) {
    return new Response("Unauthorized", { status: 401 });
  }

  const supabase = createClient(
    process.env.EXPO_PUBLIC_SUPABASE_URL!,
    process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data, error } = await supabase.auth.getUser(token);

  if (error || !data.user) {
    return new Response("Unauthorized", { status: 401 });
  }
};

export default middleware;
