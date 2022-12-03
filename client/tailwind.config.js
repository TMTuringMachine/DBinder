/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FC5252",
        secondary: "#00FFED",
        secondaryT: "rgba(0, 255, 238, 0.614)",
        background: "#141C2A",
        backgroundT: "rgba(20, 28, 42, 0.658)",
        surface: "#000",
        surface2: "#808080",
        text1: "rgba(255, 255, 255, 0.685)",
        surface3: "rgba(255, 255, 255, 0.30)",
        color3: "#2FB2E1",
        color4: "#818181",
        background2:"#2C325A"
      },
      boxShadow: {
        shadow1: "0px 8px 20px rgba(35, 35, 35, 0.1)",
      },
    },
  },
  plugins: [],
};
