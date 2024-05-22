/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        scrollbarThumb: '#888', // Customize the scrollbar thumb color
        scrollbarThumbHover: '#555', // Customize the scrollbar thumb hover color
        scrollbarTrack: '#343839', // Customize the scrollbar track color
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar': {
          'overflow-y': 'auto',
          'scrollbar-width': 'thin', // For Firefox
          'scrollbar-color': '#888 #343839', // For Firefox
        },
        '.scrollbar::-webkit-scrollbar': {
          width: '12px',
        },
        '.scrollbar::-webkit-scrollbar-track': {
          background: '#333',
        },
        '.scrollbar::-webkit-scrollbar-thumb': {
          background: '#888',
          borderRadius: '10px',
        },
        '.scrollbar::-webkit-scrollbar-thumb:hover': {
          background: '#555',
        },
      });
    },
  ],
}