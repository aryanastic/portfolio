/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // ← Needed for dark/light theme toggle
  theme: {
    extend: {},
  },
  plugins: [],
}
