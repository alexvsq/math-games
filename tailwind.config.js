/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./modules/**/*.{js,jsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      green: "#9FC82C",
      black: "#0b0b0b",
      gray1: "#171717",
      grayText: "#656565",
      grayLines: "#393939",
    },
  },
  plugins: [],
};
