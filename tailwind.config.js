/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        jetbrains: ["JetBrains Mono", "monospace"]
      },
      textColor: {
        gold: "#f7bb50"
      }
    }
  },
  plugins: ["prettier-plugin-tailwindcss"]
};
