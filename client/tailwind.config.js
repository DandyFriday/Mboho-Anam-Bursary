/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "orange":'#ff8832',
        primary: "#4d0892", // Akwa Ibom purple
        gold: "#f5c400",
         primarySoft: "#ede7f6",
        goldSoft: "#fde68a",
        emeraldSoft: "#d1fae5",
        emerald: "#065f46",
        dark: "#1f2937",
      },
    },
  },
  plugins: [],
};



// colors: {
//   /* Brand */
//   primary: "#4d0892",
//   primarySoft: "#ede7f6",
//   gold: "#f5c400",
//   goldSoft: "#fde68a",

//   /* Green / Growth */
//   emerald: "#065f46",
//   emeraldSoft: "#d1fae5",
//   success: "#16a34a",
//   successSoft: "#dcfce7",

//   /* Text */
//   textPrimary: "#1f2937",
//   textSecondary: "#4b5563",
//   textLight: "#9ca3af",
//   textWhite: "#ffffff",

//   /* Background */
//   bgWhite: "#ffffff",
//   bgLight: "#f9fafb",
//   bgGray: "#f3f4f6",
//   bgDark: "#111827",

//   /* Borders */
//   borderLight: "#e5e7eb",
//   borderDark: "#374151",

//   /* Status */
//   warning: "#f59e0b",
//   error: "#dc2626",
// }
