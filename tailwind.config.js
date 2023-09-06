/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'white-2xl': '0 25px 25px rgba(255, 255, 255, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
      },
      colors: {
        'space-yellow': '#de9528',
      },
      scale: {
        '175': '1.75',
        '200': '2',
        '225': '2.25',
        '225': '2.25',
        '250': '2.5',
        '275': '2.75',
        '300': '3',
        '400': '4',
        '500': '5',
        '600': '6',
        '700': '7',
        '800': '8',
        '900': '9',
      },
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['Orbitron', 'sans-serif'],
    },
  },
  plugins: [],
}


// Titillium Web
// Orbitron
// Roboto Mono
// Raleway
