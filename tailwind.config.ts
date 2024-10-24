import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkviolet: "var(--darkviolet)",
        darkpink: "var(--darkpink)",
        frenchgray: "var(--french-gray)",
        ashgray: "var(--ash-gray)",
        celadon: "var(--celadon)",
      },
    },
  },
  plugins: [],
};
export default config;
