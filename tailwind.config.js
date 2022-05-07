module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "var(--textDark)",
      },
    },
  },
  plugins: [require("daisyui")],
};
