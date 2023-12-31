/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "#F0F0F0",
        peach: {
          50: "#fff9eb",
          100: "#ffe9b3",
          200: "#ffdc88",
          300: "#ffc54a",
          400: "#ffad20",
          500: "#f98907",
          600: "#dd6302",
          700: "#b74306",
          800: "#94330c",
          900: "#7a2a0d",
          950: "#461402",
        },
        "french-pass": {
          50: "#ebfffe",
          100: "#cdfdff",
          200: "#b3faff",
          300: "#62f2fe",
          400: "#1be0f5",
          500: "#00c3db",
          600: "#029cb8",
          700: "#0a7c94",
          800: "#126478",
          900: "#135266",
          950: "#063646",
        },
        geraldine: {
          50: "#fff1f1",
          100: "#ffe1e1",
          200: "#ffc7c7",
          300: "#ffa0a0",
          400: "#ff8585",
          500: "#f83b3b",
          600: "#e51d1d",
          700: "#c11414",
          800: "#a01414",
          900: "#841818",
          950: "#480707",
        },
      },
    },
  },
  plugins: [],
};
