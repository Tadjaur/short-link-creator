const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@spartan-ng/ui-core/hlm-tailwind-preset')],
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.fuchsia,
        secondary: colors.cyan,
        neutral: colors.slate,
      }
    },
  },
  plugins: [],
}

