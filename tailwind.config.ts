import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e1e1e',
          light: '#3b82f6',
          dark: '#1e3a8a',
        },
        secondary: {
          DEFAULT: '#8491a3',
          light: '#f59e0b',
          dark: '#b45309',
        },
        neutral: {
          DEFAULT: '#8491a3',
          light: '#d1d5db',
          dark: '#4b5563',
        },
        bgGray: 'red',
      },
    },
  },
  plugins: [],
};
export default config;
