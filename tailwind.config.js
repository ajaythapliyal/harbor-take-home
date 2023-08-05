/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-100": "#222222",
      "primary-200": "#000000",
      "secondary-100": "#FFFFFF",
      "secondary-200": "#AAAAAA",
      "secondary-300": "#F6F8FA",
      "secondary-400": "#999999",
      "accent-neutral": "#2F80ED",
      "accent-success": "#509900",
      "accent-warn": "#DB9000",
      "accent-error": "#CD3A4C",
      "accent-invalid": "#555555",
    },
    fontFamily: {
      sans: ["var(--font-harbor)"],
    },
  },
  plugins: [],
};
