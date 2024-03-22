/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/img/bg/bg.png')",
      },
    },
  },
  plugins: [],
};
