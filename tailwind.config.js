/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        FS: ["FS Joey Light", "sans-serif"],
      },
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
        logo: "var(--logo-color)",
        overlay: "var(--overlay)",
        content: "var(--content)",
        primary: "var(--primary)",
        greenlight: "#5b7c2a",
      },
    },
  },
  plugins: [],
};
