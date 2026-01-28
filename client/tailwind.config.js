/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4d0892", // Akwa Ibom purple
        gold: "#f5c400",
        goldSoft: "#fde68a",
        dark: "#1f2937",
      },
    },
  },
  plugins: [],
};
