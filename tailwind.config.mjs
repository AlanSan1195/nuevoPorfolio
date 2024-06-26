/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        pirate: ["Pirata One",],
        rocks:["Holtwood One SC"],
        old:['IM Fell DW Pica SC'],
        rdr:["chinese_rocks_rg", ],
      },
      colors: {
        primary: "var(--color-primary)",
        secundary: "var(--color-secundary)",
      },
    },
  },
};
