from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
from dotenv import load_dotenv
from google import genai
from google.genai import types
import httpx
import ssl
import certifi
import pandas as pd
import os

# ==========================================
# CONFIGURACIÓN
# ==========================================
load_dotenv()

# Antivirus como Avast intercepta el tráfico HTTPS para escanearlo y reemplaza
# los certificados por unos propios cuya cadena no pasa la validación estricta
# (X509_STRICT) que exige OpenSSL 3 por defecto. Se desactiva esa bandera para
# poder confiar en la cadena local sin deshabilitar la verificación TLS.
_ssl_context = ssl.create_default_context(cafile=certifi.where())
_ssl_context.verify_flags &= ~ssl.VERIFY_X509_STRICT

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY"),
    http_options=types.HttpOptions(httpx_client=httpx.Client(verify=_ssl_context)),
)

app = FastAPI(title="Tuali Growth Agent")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==========================================
# DATOS
# ==========================================
df_orders = pd.read_csv("Orders.csv")
df_resultados = pd.read_csv("Resultados.csv")

# ==========================================
# MODELO
# ==========================================
class TualiContext(BaseModel):
    id_cliente: str
    meta_negocio: str
    pregunta_o_situacion: str
    contexto_externo: Optional[str] = None

# ==========================================
# ENDPOINT
# ==========================================
@app.post("/tuali/growth-agent")
async def agente_crecimiento(contexto: TualiContext):

    # Aquí puedes meter lógica real de pandas más adelante
    datos_comportamiento = (
        "- Ticket promedio: $150 MXN.\n"
        "- Top ventas: Refrescos y Botanas."
    )

    prompt = f"""
    Eres el 'Tuali Growth Agent', un asesor de negocios 100% GRATUITO.
    Tu usuario es un tendero mayor que NO LE GUSTA LEER MUCHO.

    META: {contexto.meta_negocio}
    SITUACIÓN: {contexto.pregunta_o_situacion}
    CLIMA/EVENTOS: {contexto.contexto_externo}
    DATOS: {datos_comportamiento}

    REGLAS ESTRICTAS:
    1. MÁXIMO 3 viñetas muy cortas
    2. Emojis grandes al inicio de cada línea
    3. Ganancias estimadas en negritas
    4. Sin saludos largos, ve al grano
    5. Solo 1 acción específica de Tuali
    """

    respuesta = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=prompt
    )

    return {"recomendacion_tuali": respuesta.text}

# ==========================================
# HEALTH CHECK
# ==========================================
@app.get("/health")
def health():
    return {"status": "ok"}