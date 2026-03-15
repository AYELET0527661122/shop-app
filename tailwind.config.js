/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        cream: '#F5F0E8',
        charcoal: '#1C1C1E',
        gold: '#C9A84C',
        'gold-light': '#E8D5A3',
        muted: '#6B6B6B',
      },
    },
  },
  plugins: [],
}
