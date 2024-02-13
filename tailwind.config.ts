import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        red: {
          200: '#FACFC2',
          700: '#C22B2B',
        },
        neutral: {
          800: '#202020',
          400: '#A5A1A1',
        },
        stone: {
          50: '#FFF9F7',
          200: '#E4DFDE',
          400: '#A99088',
          900: '#1D1C1C',
        },
        white: '#FFFFFF',
      },
      fontFamily: {
        caveat400: 'Caveat-400',
        ttChocolates700: 'TTChocolates-700',
        ttChocolates500: 'TTChocolates-500',
      },
      screens: {
        sm: '320px',
        md: '768px',
        lg: '-1px',
        xl: '1440px',
        '2xl': '-1px',
      },
      borderRadius: {
        default: '12px',
      },
    },
  },
  plugins: [],
};
export default config;
