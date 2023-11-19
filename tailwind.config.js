/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-light": "rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
