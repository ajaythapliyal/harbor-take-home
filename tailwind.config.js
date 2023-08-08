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
      "secondary-500": "#E5E5E5",
      "secondary-600": "#F6F6F6",
      "secondary-700": "#DDDDDD",
      "accent-neutral": "#2F80ED",
      "accent-success": "#509900",
      "accent-warn": "#DB9000",
      "accent-error": "#CD3A4C",
      "accent-invalid": "#555555",
    },
    fontFamily: {
      sans: ["var(--font-harbor)"],
    },
    boxShadow: {
      "dark-100": "0px 4px 6px 0px #0000000F",
      "dark-200": "0px 8px 24px 0px #0000001A",
    },
  },
  plugins: [],
};
