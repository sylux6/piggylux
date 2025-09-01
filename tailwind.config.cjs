module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        piggy: {
          pink: "#FFC1CC", // main brand
          rose: "#FF8FB1", // accents
          lilac: "#C5A3FF", // secondary
          mint: "#A4F9C8", // highlight
          ink: "#22192D", // text on light
          night: "#0E0A13", // dark bg
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(255, 143, 177, 0.25)",
      },
      borderRadius: {
        pig: "1.25rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
