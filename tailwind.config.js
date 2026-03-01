/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pastel: { pink:'#FFD6E8', blue:'#C4E7FF', purple:'#E5D4FF', green:'#D4FFE5', yellow:'#FFF4C4', peach:'#FFDDC1' },
        accent: { pink:'#FF6B9D', blue:'#4EA8DE', purple:'#9D84B7', green:'#7BDCB5' }
      },
      fontFamily: {
        heading: ['Fredoka','cursive'],
        sans: ['DM Sans','sans-serif'],
      },
      borderWidth: { '3': '3px' },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spinSlow 10s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
        'ping': 'ping 1s cubic-bezier(0,0,0.2,1) infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        spinSlow: { to: { transform: 'rotate(360deg)' } },
      },
    },
  },
  plugins: [],
}
