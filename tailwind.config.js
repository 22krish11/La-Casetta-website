/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'casetta-espresso': '#3D2B1F',
        'casetta-cream': '#F5F5DC',
        'casetta-olive': '#556B2F',
        'casetta-terracotta': '#C04821',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}