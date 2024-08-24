/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-color': '#ffffff',
        'primary-color': '#13547a',
        'secondary-color': '#80d0c7',
        'section-bg-color': '#f0f8ff',
        'custom-btn-bg-color': '#80d0c7',
        'custom-btn-bg-hover-color': '#13547a',
        'dark-color': '#000000',
        'p-color': '#717275',
        'border-color': '#7fffd4',
        'link-hover-color': '#13547a',
      },
      fontFamily: {
        'body': ['Open Sans', 'sans-serif'],
        'title': ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'h1': '58px',
        'h2': '46px',
        'h3': '32px',
        'h4': '28px',
        'h5': '24px',
        'h6': '22px',
        'p': '20px',
        'menu': '14px',
        'btn': '18px',
        'copyright': '16px',
      },
      borderRadius: {
        'large': '100px',
        'medium': '20px',
        'small': '10px',
      },
      fontWeight: {
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
      },
    },
  },
  plugins: [],
}