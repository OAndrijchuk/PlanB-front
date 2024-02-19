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
      },
      backgroundImage: theme => ({
        'hero-mobile':
          "linear-gradient(rgba(0, 0, 0, 0.2) 0px -191.875px), url('/hero_mob.jpg')",
        'hero-tablet': "url('/hero_tab.jpg')",
        'hero-desktop': " url('/hero_desk.jpg')",
      }),
    },
  },
  plugins: [],
};
export default config;
