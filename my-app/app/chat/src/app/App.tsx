import { useState } from "react";
import AgenteCreci from "./components/AgenteCreci";

export default function App() {
  return (
    <div className="size-full flex items-center justify-center bg-[#d0d0d0] overflow-auto py-6">
      <AgenteCreci />
    </div>
  );
}
