module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@heroui/react/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@heroui/react/tailwind")],
};
