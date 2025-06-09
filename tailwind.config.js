/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      acadfont:["Dancing Script","cursive"],  
      homefont:["Playfair Display","serif"],
      randomfont:['Sacramento', "cursive"],
      // logoFont: ['Noto Serif', "serif"],
      // logoFont2: ['Domine', "serif"],
      logoFont3: ['Red Rose', "serif"],
      homepara:['EB Garamond', "serif"],
      downloadfont:['Crimson Pro', "serif"],
    },
  },
  plugins: [],
}

