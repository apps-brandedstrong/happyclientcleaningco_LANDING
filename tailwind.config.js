/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta tomada de happyclientcleaningco.com
        navy: "#16305f",
        "navy-2": "#1c4486",
        sky: "#2c87c1",
        cta: "#1c6fd0",
        cyan: "#06c2e2",
        cream: "#f2f8fc",
        ink: "#16202c",
        muted: "#5c6a7a",
        line: "#dbe7f2",
      },
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
        display: ["Oswald", "Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
