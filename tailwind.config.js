const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1800px',
        'lg': '1023px',
        'md': '767px',
        'sm': '639px',
        'xs': '376px',
      },
      colors: {
        'primary-blue': '#2401D5',
        'secondary-blue': '#25BAFF',
        'primary-orange': '#FF980A',
        'secondary-orange': '#FF5900',
        'light-gray': '#D3D3D3',
        'dark-gray': '#292D32',
        'dark-blue': '#0D121C',
        'blur-gray': '#D9D9D91A',
        'light-black': '#060606',
      },
      backgroundImage: {
        'shine-gradient': ['var(--shine-gradient)'],
      },
      fontSize: {
        h1: ['var(--h1)'],
        h2: ['var(--h2)'],
        h3: ['var(--h3)'],
        h4: ['var(--h4)'],
        h5: ['var(--h5)'],
        xl: ['var(--xl)'],
        lg: ['var(--lg)'],
        base: ['var(--base)'],
        md: ['var(--md)'],
        sm: ['var(--sm)'],
        xs: ['var(--xs)'],
      },
      fontFamily: {
        'euro-bold': ['euro-bold', 'sans-serif'],
        'euro-light': ['euro-light', 'sans-serif'],
        'euro-semibold': ['euro-semibold', 'sans-serif'],
        'suisse-bold': ['suisse-bold', 'sans-serif'],
        'suisse-light': ['suisse-light', 'sans-serif'],
        'suisse-medium': ['suisse-medium', 'sans-serif'],
        'suisse-regular': ['suisse-regular', 'sans-serif'],
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [
    addVariablesForColors,
  ],
}


function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
