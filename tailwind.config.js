module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      sora:["Sora"]
    },
    extend: {
      animation: {
        'spin-slow': 'spin 1s linear infinite',
      }
    },
  },
  plugins: [],
}