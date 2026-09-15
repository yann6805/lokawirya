/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#A8FF00',
          hover: '#8FE000',
        },
        'base-black': '#0A0A0A',
        'base-white': '#FFFFFF',
        'gray-dark': '#1F1F1F',
        'gray-light': '#F4F4F4',
        'gray-border': '#E0E0E0',
        warning: '#FFB020',
        error: '#E5484D',
      },
      borderRadius: {
        btn: '8px',
        card: '12px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
