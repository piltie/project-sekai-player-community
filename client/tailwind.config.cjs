/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      montserrat: "Montserrat",
      "m-plus-1p": "M PLUS 1p",
    },
    extend: {
      screens: {
        md: "700px",
        // => @media (min-width: 992px) { ... }
      },
      backgroundImage: {
        parallax:
          "url('img/parallax_parts_large.png'), url('img/parallax_parts_small.png'), url('img/parallax_parts_text.png')",
      },
    },
  },
  plugins: [],
};
