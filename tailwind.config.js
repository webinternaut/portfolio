const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.500'),
            strong: {
              color: theme('colors.orange.500'),
            },
            blockquote: {
              color: theme('colors.orange.700'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.500'),
            strong: {
              color: theme('colors.pink.500'),
            },
            blockquote: {
              color: theme('colors.pink.700'),
            }
          },
        },
      }),
    },
    fontFamily: {
        'sans': ['Merriweather','sylfaen', 'system-ui'],
        'serif': ['"Open Sans"','Arial','sans-serif'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['"Open Sans"'],
      },
      container: {
        center: true,
      },
      extend: {
        animation: {
          'spin-slow': 'spin 3s linear infinite',
        },
        boxShadow: {
          '3xl': '0 25px 20px -15px rgba(0, 0, 0, 0.4)',
        }
      }
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}