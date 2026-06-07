// antes...
// module.exports = {
//   content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
//   presets: [require("nativewind/preset")],
// };

// tailwind.config.js
const { AppColors } = require("./agente/constants/appColors"); // <-- Lo importamos aquí

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}",
    "./agente/**/*.{js,ts,jsx,tsx}" // <-- ¡IMPORTANTE! Agrega la carpeta agente para que Tailwind busque clases ahí
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        ...AppColors, // <-- Inyectamos todos los colores automáticamente usando el operador spread
      },
    },
  },
  plugins: [],
};