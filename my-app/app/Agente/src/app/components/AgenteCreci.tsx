import { useState } from "react";
import { Send, Mic } from "lucide-react";

export default function AgenteCreci() {
  const [message, setMessage] = useState("");

  return (
    <div
      className="relative flex flex-col bg-[#f5f5f5] overflow-hidden"
      style={{ width: 390, height: 844, borderRadius: 40, boxShadow: "0 8px 40px rgba(0,0,0,0.18)" }}
    >
      {/* Status bar placeholder */}
      <div className="flex items-center justify-between px-6 pt-4 pb-2">
        <span className="text-[13px] text-gray-900" style={{ fontWeight: 600 }}>9:41</span>
        <div className="flex gap-1 items-center">
          <div className="w-4 h-2 bg-gray-800 rounded-sm opacity-80" />
          <div className="w-1 h-2 bg-gray-800 rounded-sm opacity-80" />
          <div className="w-4 h-2 bg-gray-800 rounded-sm opacity-80" />
        </div>
      </div>

      {/* Header */}
      <div className="px-5 pb-4">
        <h1 className="text-gray-900" style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.2 }}>Mi crecimiento</h1>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-5 pb-4 flex flex-col gap-4">

        {/* Meta card */}
        <div
          className="rounded-2xl px-5 pt-5 pb-6"
          style={{ backgroundColor: "#1a7a3c" }}
        >
          <p style={{ fontSize: 13, fontWeight: 500, color: "#a7f3c1", marginBottom: 4 }}>Meta de junio</p>
          <p style={{ fontSize: 28, fontWeight: 700, color: "#ffffff", lineHeight: 1.2, marginBottom: 16 }}>Ganar +$4,000</p>
          <div style={{ height: 6, backgroundColor: "#0f5229", borderRadius: 99, overflow: "hidden", marginBottom: 8 }}>
            <div style={{ width: "60%", height: "100%", backgroundColor: "#4ade80", borderRadius: 99 }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: 12, color: "#a7f3c1" }}>$2,400 logrado</span>
            <span style={{ fontSize: 12, color: "#a7f3c1" }}>60%</span>
          </div>
        </div>

        {/* Plan de la semana */}
        <p className="text-gray-800 mt-1" style={{ fontSize: 15, fontWeight: 600 }}>Tu plan de esta semana</p>

        {/* Card 1 — Promo */}
        <div className="bg-white rounded-2xl p-4 flex flex-col gap-3" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.13)" }}>
          <div className="flex justify-between items-center">
            <span
              className="px-2.5 py-0.5 rounded-full text-[#1a7a3c] bg-[#dcfce7]"
              style={{ fontSize: 11, fontWeight: 600 }}
            >
              Promo
            </span>
            <span
              className="px-2.5 py-0.5 rounded-full bg-[#fff7ed] text-[#ea580c]"
              style={{ fontSize: 11, fontWeight: 600 }}
            >
              +$320
            </span>
          </div>
          <p className="text-gray-700" style={{ fontSize: 13, lineHeight: 1.5 }}>
            Activa la promo de Coca 600 ml. Tus viernes venden 40% más cuando la tienes.
          </p>
          <button
            className="w-full rounded-xl py-2.5 text-white"
            style={{ backgroundColor: "#f97316", fontSize: 14, fontWeight: 600 }}
          >
            Activar promo
          </button>
        </div>

        {/* Card 2 — Pedido sugerido */}
        <div className="bg-white rounded-2xl p-4 flex flex-col gap-3" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.13)" }}>
          <div className="flex justify-between items-center">
            <span
              className="px-2.5 py-0.5 rounded-full text-[#1a7a3c] bg-[#dcfce7]"
              style={{ fontSize: 11, fontWeight: 600 }}
            >
              Pedido sugerido
            </span>
            <span
              className="px-2.5 py-0.5 rounded-full bg-[#fff7ed] text-[#ea580c]"
              style={{ fontSize: 11, fontWeight: 600 }}
            >
              +$210
            </span>
          </div>
          <p className="text-gray-700" style={{ fontSize: 13, lineHeight: 1.5 }}>
            Agrega Jugos del Valle. Llevas 3 semanas sin pedirlo y tus clientes lo compran.
          </p>
          <button
            className="w-full rounded-xl py-2.5 bg-white border"
            style={{ borderColor: "#1a7a3c", color: "#1a7a3c", fontSize: 14, fontWeight: 600 }}
          >
            Agregar al pedido
          </button>
        </div>

        {/* Card 3 — Loyalty */}
        <div className="bg-white rounded-2xl p-4 flex flex-col gap-3" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.13)" }}>
          <div className="flex justify-between items-center">
            <span
              className="px-2.5 py-0.5 rounded-full text-[#1a7a3c] bg-[#dcfce7]"
              style={{ fontSize: 11, fontWeight: 600 }}
            >
              Loyalty
            </span>
            <span
              className="px-2.5 py-0.5 rounded-full bg-[#fff7ed] text-[#ea580c]"
              style={{ fontSize: 11, fontWeight: 600 }}
            >
              Caja gratis
            </span>
          </div>
          <p className="text-gray-700" style={{ fontSize: 13, lineHeight: 1.5 }}>
            Te faltan 80 puntos para tu reto. Pide hoy y canjeas una caja sin costo.
          </p>
          <button
            className="w-full rounded-xl py-2.5 bg-white border"
            style={{ borderColor: "#1a7a3c", color: "#1a7a3c", fontSize: 14, fontWeight: 600 }}
          >
            Ver mi reto
          </button>
        </div>
      </div>

      {/* Chat input */}
      <div className="px-4 pb-6 pt-2 bg-[#f5f5f5]" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2.5" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Pregúntale a tu asesor..."
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
            style={{ fontSize: 13 }}
          />
          <button
            className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: "#f97316" }}
          >
            <Mic size={24} color="white" />
          </button>
          <button
            className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: "#f97316" }}
          >
            <Send size={24} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
}
