/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
      },
      minHeight: {
        sc: "calc(100vh - 154px)",
      },
      animation: {
        "move-up-down": "move-up-down",
      },
    },
  },
  plugins: [],
};
