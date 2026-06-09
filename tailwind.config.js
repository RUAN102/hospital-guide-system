/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        medical: {
          50: '#eff8ff',
          100: '#dbeefe',
          200: '#bfe1fe',
          300: '#93cdfd',
          400: '#60aff9',
          500: '#3b8ef4',
          600: '#2471e9',
          700: '#1c5cd6',
          800: '#1d4bae',
          900: '#1e4189',
          950: '#172953',
        },
        surface: '#f6faff',
        ink: '#0f1b38',
        muted: '#5b6b87',
        line: '#dbeefe',
        danger: '#c0392b',
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft YaHei"',
          'sans-serif',
        ],
      },
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
        18: '4.5rem',
        22: '5.5rem',
      },
      borderRadius: {
        xl2: '0.75rem',
      },
      boxShadow: {
        card: '0 1px 2px 0 rgba(36, 113, 233, 0.06), 0 1px 3px 0 rgba(36, 113, 233, 0.08)',
        nav: '0 1px 0 0 rgba(36, 113, 233, 0.08)',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [],
}
