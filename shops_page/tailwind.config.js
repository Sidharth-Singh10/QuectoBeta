/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui")],
  content: ["./work/*.{html,js}"],
  theme: {
    extend: {
        colors:{

            'uiblue':'#15c4f8',
            'uigreen':'4cd964'
          
        }

    },
  },
  plugins: [],
}

