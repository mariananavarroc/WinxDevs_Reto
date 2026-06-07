const API_URL = process.env.EXPO_PUBLIC_API_URL ?? "http://192.168.1.XX:8000";

export interface TualiRequest {
  id_cliente: string;
  meta_negocio: string;
  pregunta_o_situacion: string;
  contexto_externo?: string;
}

export async function consultarAgente(datos: TualiRequest): Promise<string> {
  const response = await fetch(`${API_URL}/tuali/growth-agent`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos),
  });

  if (!response.ok) {
    throw new Error(`Error del servidor: ${response.status}`);
  }

  const json = await response.json();
  return json.recomendacion_tuali;
}