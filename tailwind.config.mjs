/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: "25px", // Now text-base = 18px
      },

      colors: {
        main: "#018692"
      }
    },
  },
  plugins: [],
}
