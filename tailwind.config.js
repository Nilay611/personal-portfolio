/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        marcellus_sc_regular: ["MarcellusSC-Regular", "serif"],
      },
      colors: {
        primary: "#fa1e4e",
      },
    },
  },
  plugins: [],
};
