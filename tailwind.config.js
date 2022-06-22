module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: ["./src/**/*.tsx"],
  theme: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
