/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'contact': "url(public\img2.jpg)"
      },
      colors:{
        'btcol': '#4cd964',
      },
      height:{
        'custom1':'46rem',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark","luxury"],
  },
}

