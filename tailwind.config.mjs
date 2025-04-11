/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        BackgroundLight:  '#FFFFFF',
        MainStyleLight: '#FF5C00',
        SubStyleLight: '#F2F2F2',
        SubGreenLight: '#1EE1AD',
        SubYellowLight: '#F0AA17',
        MainStyleDark: '#7200A8',
        BackgroundDark: '#362B44',
        SubStyleDark: '#9785AD',
        SubGreenDark: '#40A76F',
        SubYellowDark: '#E9A000',
      },
    },
  },
  plugins: [],
};
