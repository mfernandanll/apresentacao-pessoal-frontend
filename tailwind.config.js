/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "bg-primary": "#201E43",
      "bg-secondary": "#134B70",
      "bg-text": "#508C9B",
      "bg-white": "#EEEEEE"
    }
  },
  plugins: [],
}

