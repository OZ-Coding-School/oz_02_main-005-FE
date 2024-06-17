import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#956BED',
      primarylight: '#F6EFFF',
      white: '#FFFFFF',
      muted: '#BDBDBD',
      success: '#2DC071',
      danger: '#E74040',
      dangerlight: '#FFDEDE',
      dangergray: '#DCBCBC',
      alert: '#E77C40',
      gray: '#F1F1F1',
      grayc: '#cccccc',
      gray6: '#666666',
      gray8: '#888888',
      black: '#252B42',
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
        '10': '10px',
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '22': '22px',
        '24': '24px',
        '26': '26px',
        '28': '28px',
        '30': '30px',
        '32': '32px',
        '34': '34px',
        '36': '36px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        sm: '390px',
        md: '390px',
        lg: '390px',
        xl: '390px',
      },
      container: {
        padding: '0 0.75rem',
      },
    },
  },
  plugins: [],
};
export default config;
