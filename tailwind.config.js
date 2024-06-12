// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
//     // Or if using `src` directory:
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode using the class strategy
  content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
     
        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
      ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        secondary: '#8BC34A',
        'primary-hover': '#45A049',
        'secondary-hover': '#7CB342',
        'aside-dark': '#333333',
        'nav-dark': '#263238',
      },
      backgroundColor: {
        'primary-bg': '#5b9a54',
        'secondary-bg': '#F5F5F5',
        'hover-bg': '#E0E0E0',
      },
      textColor: {
        'aside-text': '#FFFFFF',
        'nav-text': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Roboto', 'Open Sans', 'Lato', 'sans-serif'],
        mono: ['Source Code Pro', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
