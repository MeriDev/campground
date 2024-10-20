/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': 'hsla(204, 79%, 43%, 0.8)',
      },
      boxShadow: {
        custom: '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
