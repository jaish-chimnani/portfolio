
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        landingBackground: `url('/public/images/cool-background.svg')`
      },
      colors: {
        deepTeal: '#030637',
      }
    },
  },
  plugins: [],
}