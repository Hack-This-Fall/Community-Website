/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        nanum: "var(--font-nanum-pen)",
        raleway: "var(--font-raleway)",
        inter: "var(--font-inter)",
        caveat: "var(--font-caveat)",
        poppins: "var(--font-poppins)",
      }
    },
  },
  plugins: [],
}
