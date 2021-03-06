module.exports = {
  mode: "Jit",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        titulo: ["Mountains of Christmas", "cursive"],
      },
      colors: {
        jewel: {
          DEFAULT: "#146B3A",
          50: "#57E093",
          100: "#46DC88",
          200: "#27D272",
          300: "#21B05F",
          400: "#1A8D4D",
          500: "#146B3A",
          600: "#0B3C20",
          700: "#020C07",
          800: "#000000",
          900: "#000000",
        },
        "red-oxide": {
          DEFAULT: "#6C0503",
          50: "#F9312D",
          100: "#F91E1A",
          200: "#E30B06",
          300: "#BB0905",
          400: "#940704",
          500: "#6C0503",
          600: "#350201",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        buttercup: {
          DEFAULT: "#F59E0B",
          50: "#FCE4BB",
          100: "#FBDCA8",
          200: "#FACD81",
          300: "#F8BD59",
          400: "#F7AE32",
          500: "#F59E0B",
          600: "#C07C08",
          700: "#8A5906",
          800: "#543603",
          900: "#1E1401",
        },
      },
    },
  },
  plugins: [],
};
