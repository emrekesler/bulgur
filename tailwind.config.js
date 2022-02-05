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
        rubik: "'Rubik', serif",
      },
      fontSize: {
        tiny: ".800rem",
        calc: "calc(1.265625rem + 0.1875vw)",
      },
      backgroundImage: {
        blog1: "url('https://blogzine.webestica.com/assets/images/blog/1by1/01.jpg')",
        coin: "url('https://images.unsplash.com/photo-1643488056768-fe017dc164b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80')",
        food: "url('https://images.unsplash.com/photo-1632158930341-46604b637a0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80')",
        car: "url('https://img.redbull.com/images/w_2929/q_auto,f_auto/redbullcom/2021/10/10/pu9vpczmlgzwilqrlufm/red-bull-racing')",
      },
      spacing: {
        128: "35rem",
        256: "70rem",
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
