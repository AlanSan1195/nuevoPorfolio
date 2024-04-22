/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        pirate: ["Pirata One", "cursive"],
      },
      colors: {
        primary: "var(--color-primary)",
        secundary: "var(--color-secundary)",
      },
    },
  },
};
