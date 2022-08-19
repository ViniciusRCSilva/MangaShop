module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      animation: {
        colorChange: 'colorChange 1s infinite',
      },
      keyframes: {
        colorChange: {
          '0%': { color: '#000' },
          '50%': { color: '#ff2626' },
          '100%': { color: '#000' },
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
