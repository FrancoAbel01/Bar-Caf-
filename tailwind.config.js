/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        coffee: {
          50: '#f7f3ef',
          100: '#ece2d6',
          200: '#d9c4ad',
          300: '#c1a082',
          400: '#a87c58',
          500: '#8b5e3b',
          600: '#6f482d',
          700: '#543623',
          800: '#3a2519',
          900: '#21140d',
          950: '#160c08',
        },
        cream: {
          50: '#fefcf9',
          100: '#fdf8f0',
          200: '#f9edda',
          300: '#f2ddb8',
          400: '#e8c590',
          500: '#dca866',
        },
        accent: {
          400: '#e0b072',
          500: '#c8923f',
          600: '#a8762a',
        },
      },
      animation: {
        'steam': 'steam 3s ease-in-out infinite',
        'steam-delay': 'steam 3s ease-in-out infinite 1s',
        'steam-delay-2': 'steam 3s ease-in-out infinite 2s',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'shimmer': 'shimmer 3s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        steam: {
          '0%': { opacity: '0', transform: 'translateY(0) scaleX(1)' },
          '15%': { opacity: '0.6' },
          '50%': { opacity: '0.3', transform: 'translateY(-40px) scaleX(1.5)' },
          '100%': { opacity: '0', transform: 'translateY(-80px) scaleX(2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backgroundImage: {
        'coffee-grain': "radial-gradient(circle at 20% 80%, rgba(168,124,88,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(200,146,63,0.12) 0%, transparent 50%)",
      },
    },
  },
  plugins: [],
};
