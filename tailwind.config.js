/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
      },
      height: {
        sc: "calc(100vh - 112px)",
      },
      animation: {
        "move-up-down": "move-up-down",
      },
    },
  },
  plugins: [],
};
