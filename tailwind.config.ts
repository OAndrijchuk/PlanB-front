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
          100: '#ECC2B6',
          200: '#FACFC2',
          300: '#F6B7A4',
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
        ttChocolates400: 'TTChocolates-400',
      },
      screens: {
        sm: '320px',
        md: '768px',
        lg: '-1px',
        xl: '1440px',
        '2xl': '-1px',
      },
      borderRadius: {
        custom: '12px',
      },
      boxShadow: {
        custom:
          '1px 7px 16px 0px rgba(42, 40, 40, 0.10), 2px 29px 29px 0px rgba(42, 40, 40, 0.09), 5px 66px 40px 0px rgba(42, 40, 40, 0.05), 10px 117px 47px 0px rgba(42, 40, 40, 0.01), 15px 183px 51px 0px rgba(42, 40, 40, 0.00);',
        online:
          '0px 4px 9px 0px rgba(250, 207, 194, 0.10), 0px 16px 16px 0px rgba(250, 207, 194, 0.09), 0px 36px 21px 0px rgba(250, 207, 194, 0.05), 0px 63px 25px 0px rgba(250, 207, 194, 0.01), 0px 99px 28px 0px rgba(250, 207, 194, 0.00);',
        up: '0px 1px 2px 0px rgba(226, 197, 187, 0.10), 0px 3px 3px 0px rgba(226, 197, 187, 0.09), 0px 7px 4px 0px rgba(226, 197, 187, 0.05), 0px 12px 5px 0px rgba(226, 197, 187, 0.01), 0px 18px 5px 0px rgba(226, 197, 187, 0.00);',
      },
    },
  },
  plugins: [],
};
export default config;
