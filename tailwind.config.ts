import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '956BED',
      'text-primary': '252B42',
      'text-secondary': '737373',
      white: 'FFFFFF',
      muted: 'BDBDBD',
      success: '2DC071',
      danger: 'E74040',
      alert: 'E77C40',
    },
    fontFamily: {
      sans: ['Noto Sans KR'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
