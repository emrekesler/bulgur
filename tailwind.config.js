module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      fontFamily: {
        rubik: "'Rubik', sans-serif",
      },
      fontSize: {
        tiny: ".800rem",
        calc: "calc(1.265625rem + 0.1875vw)",
      },
      spacing: {
        128: "35rem",
        256: "70rem",
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "0.9rem",
          paddingRight: "0.9rem",
          "@screen sm": {
            maxWidth: "96%",
          },
          "@screen md": {
            maxWidth: "94%",
          },
          "@screen lg": {
            maxWidth: "94%",
          },
          "@screen xl": {
            maxWidth: "1140px",
          },
          "@screen 2xl": {
            maxWidth: "1200px",
          },
        },
      });
    },
  ],
};
