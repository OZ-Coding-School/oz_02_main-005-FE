import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '414px',
      md: '414px',
      lg: '414px',
      xl: '414px',
    },
    container: {
      padding: '1.5rem',
    },
    colors: {
      primary: '#956BED',
      white: '#FFFFFF',
      muted: '#BDBDBD',
      success: '#2DC071',
      danger: '#E74040',
      alert: '#E77C40',
      bg_gray: '#F1F1F1',
      grayc: '#cccccc',
      gray6: '#666666',
      gray8: '#888888',
      text_primary: '#252B42',
      text_secondary: '#737373',
    },
    fontWeight: {
      regular: '400',
      medium: '500',
      bold: '700',
    },
    fontFamily: {
      sans: ['Noto Sans KR'],
    },
    extend: {
      fontSize: {
        'font-10': '10px',
        'font-12': '12px',
        'font-14': '14px',
        'font-16': '16px',
        'font-18': '18px',
        'font-20': '20px',
        'font-22': '22px',
        'font-24': '24px',
        'font-26': '26px',
        'font-28': '28px',
        'font-30': '30px',
        'font-32': '32px',
        'font-34': '34px',
        'font-36': '36px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
