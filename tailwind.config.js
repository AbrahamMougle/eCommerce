/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",],
  theme: {
    screens: {
      'latop': {'max': '450px'},
    },
  },
  plugins: [],
}

