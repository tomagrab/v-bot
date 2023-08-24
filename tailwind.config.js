/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,js,svelte,tsx,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
