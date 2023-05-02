// /** @type {import('tailwindcss').Config} */

module.exports = {
  jit: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkMode: "rgba(14, 14, 14, 0.5)",
        lightMode: "rgba(250, 250, 250, 0.6)",
      },
      backgroundImage: {
        "hero-pattern":
          "background: rgb(14, 162, 153) background: linear-gradient(90deg,rgba(14, 162, 153, 1) 7%, rgba(9, 75, 121, 1) 49%, rgba(36, 95, 210, 1) 86%)",
      },
    },
  },
  plugins: [],
};
