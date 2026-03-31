/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        glass:
          "0 32px 80px -36px rgba(15, 55, 90, 0.5), 0 18px 42px -24px rgba(255, 255, 255, 0.35)",
      },
    },
  },
  plugins: [],
};
