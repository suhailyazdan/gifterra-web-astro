export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: "25px", // Now text-base = 18px
      },
    },
  },
  plugins: [],
};