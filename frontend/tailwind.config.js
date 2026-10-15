/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9b59b6', // vibrant purple
        secondary: '#3498db', // electric blue
        darkbg: '#0a0a0a', // near‑black
        darknav: '#1a1a2e', // dark navy
      },
      boxShadow: {
        glow: '0 0 8px rgba(155, 89, 182, 0.6)',
      },
    },
  },
  plugins: [],
};
