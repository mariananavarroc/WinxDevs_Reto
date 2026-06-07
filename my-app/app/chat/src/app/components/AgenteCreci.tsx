import { useState } from "react";
import { Send, Mic } from "lucide-react";
import { motion } from "motion/react";
import viejitoImg from "../../imports/Captura_de_pantalla_2026-06-07_a_las_2.15.03_a.m.-1.png";

const orangeButtonStyle = {
  width: 52,
  height: 52,
  borderRadius: "50%",
  background: "#f97316",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  position: "relative" as const,
  outline: "none",
};

export default function AgenteCreci() {
  const [message, setMessage] = useState("");

  return (
    <div
      style={{
        position: "relative",
        width: 390,
        height: 844,
        borderRadius: 40,
        boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
        background: "#f5f5f5",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Empty space */}
      <div style={{ flex: 1 }} />

      {/* Viejito + bubble */}
      <div
        style={{
          position: "absolute",
          bottom: 90,
          left: 12,
          display: "flex",
          alignItems: "center",
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            overflow: "hidden",
            border: "2.5px solid #fff",
            boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
            flexShrink: 0,
            background: "#e8e8e8",
          }}
        >
          <img
            src={viejitoImg}
            alt="Asesor"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        <div style={{ position: "relative", marginLeft: 12 }}>
          <div style={{
            position: "absolute",
            left: -9,
            top: "50%",
            transform: "translateY(-50%)",
            width: 0,
            height: 0,
            borderTop: "8px solid transparent",
            borderBottom: "8px solid transparent",
            borderRight: "10px solid #fff",
          }} />
          <div style={{
            background: "#fff",
            borderRadius: 18,
            padding: "12px 16px",
            boxShadow: "0 4px 18px rgba(0,0,0,0.13)",
            maxWidth: 200,
          }}>
            <p style={{ fontSize: 13, fontWeight: 500, color: "#1a1a1a", lineHeight: 1.4, margin: 0 }}>
              ¿Qué vamos a hacer hoy?
            </p>
          </div>
        </div>
      </div>

      {/* Chat bar */}
      <div style={{ padding: "8px 16px 28px", background: "#f5f5f5", borderTop: "1px solid rgba(0,0,0,0.06)", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#fff", borderRadius: 99, padding: "8px 16px", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Pregúntale a tu asesor..."
            style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: 13, color: "#444" }}
          />

          {/* Mic button */}
          <motion.button
            style={orangeButtonStyle}
            whileTap={{
              scale: 1.22,
              boxShadow: "0 0 0 14px rgba(150,150,150,0.25)",
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Mic size={22} color="white" />
          </motion.button>

          {/* Send button */}
          <motion.button
            style={orangeButtonStyle}
            whileTap={{
              scale: 1.22,
              boxShadow: "0 0 0 14px rgba(150,150,150,0.25)",
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Send size={22} color="white" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
