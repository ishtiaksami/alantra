/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        media1: "url('/img/image.jpg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      maxWidth: {
        siteWidth: "1400px",
      },
      fontSize: {
        32: "2rem",
      },
      colors: {
        primary: "var(--logo-color)",
        overlay: "var(--overlay)",
      },
    },
  },
  plugins: [],
};
