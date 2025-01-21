import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './components/Search/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/Search/**/*.{js,ts,jsx,tsx,mdx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        red: {
          light: '#FABDB4',
          default: '#DF5B5B',
          dark: '#C9252C',
        },
        blue: {
          light: '#72C3CB',
          default: '#006A84',
          dark: '#004B62',
        },
        base: {
          '90': '#414042',
          '80': '#58595B',
          '60': '#808285',
          '40': '#A7A9AC',
          '20': '#D1D3D4',
          '10': '#E6E7E8',
          '3': '#F6F6F6',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
