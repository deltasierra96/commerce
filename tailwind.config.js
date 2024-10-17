const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.75rem',
        sm: '2rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '2rem'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1240px',
      '2xl': '1450px'
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--colors-primary-500) / <alpha-value>)',
          50: 'rgb(var(--colors-primary-50) / <alpha-value>)',
          100: 'rgb(var(--colors-primary-100) / <alpha-value>)',
          200: 'rgb(var(--colors-primary-200) / <alpha-value>)',
          300: 'rgb(var(--colors-primary-300) / <alpha-value>)',
          400: 'rgb(var(--colors-primary-400) / <alpha-value>)',
          500: 'rgb(var(--colors-primary-500) / <alpha-value>)',
          600: 'rgb(var(--colors-primary-600) / <alpha-value>)',
          700: 'rgb(var(--colors-primary-700) / <alpha-value>)',
          800: 'rgb(var(--colors-primary-800) / <alpha-value>)',
          900: 'rgb(var(--colors-primary-900) / <alpha-value>)',
          950: 'rgb(var(--colors-primary-950) / <alpha-value>)'
        },
        neutral: {
          50: 'rgb(var(--colors-neutral-50) / <alpha-value>)',
          100: 'rgb(var(--colors-neutral-100) / <alpha-value>)',
          200: 'rgb(var(--colors-neutral-200) / <alpha-value>)',
          300: 'rgb(var(--colors-neutral-300) / <alpha-value>)',
          400: 'rgb(var(--colors-neutral-400) / <alpha-value>)',
          500: 'rgb(var(--colors-neutral-500) / <alpha-value>)',
          600: 'rgb(var(--colors-neutral-600) / <alpha-value>)',
          700: 'rgb(var(--colors-neutral-700) / <alpha-value>)',
          800: 'rgb(var(--colors-neutral-800) / <alpha-value>)',
          900: 'rgb(var(--colors-neutral-900) / <alpha-value>)',
          950: 'rgb(var(--colors-neutral-950) / <alpha-value>)'
        }
      },
      flexBasis: {
        'drawer-xs': 'var(--drawer-xs)',
        'drawer-sm': 'var(--drawer-sm)',
        drawer: 'var(--drawer)',
        'drawer-lg': 'var(--drawer-lg)',
        'drawer-xl': 'var(--drawer-xl)'
      },
      ringWidth: {
        3: '3px',
        global: 'var(--ring-global-width)'
      },
      ringOffsetWidth: {
        global: 'var(--ring-global-offset)'
      },
      fontWeight: {
        button: 'var(--button-font-weight)',
        heading: 'var(--heading-font-weight)'
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
        button: 'var(--button-font)',
        heading: 'var(--heading-font)'
      },
      zIndex: {
        header: 'var(--header-z-index)',
        'header-safe': 'var(--header-safe-z-index)'
      },
      height: {
        'input-sm': 'var(--input-height-sm)',
        input: 'var(--input-height)',
        'input-lg': 'var(--input-height-lg)',
        textarea: 'var(--textarea-height)',

        'button-sm': 'var(--input-height-sm)',
        button: 'var(--input-height)',
        'button-lg': 'var(--input-height-lg)',

        'button-compact-sm': 'var(--button-compact-height-sm)',
        'button-compact': 'var(--button-compact-height)',
        'button-compact-lg': 'var(--button-compact-height-lg)',

        'button-icon-sm': 'var(--button-icon-height-sm)',
        'button-icon': 'var(--button-icon-height)',
        'button-icon-lg': 'var(--button-icon-height-lg)',

        'button-icon-compact-sm': 'var(--button-icon-compact-height-sm)',
        'button-icon-compact': 'var(--button-icon-compact-height)',
        'button-icon-compact-lg': 'var(--button-icon-compact-height-lg)'
      },
      width: {
        'button-icon-sm': 'var(--button-icon-width-sm)',
        'button-icon': 'var(--button-icon-width)',
        'button-icon-lg': 'var(--button-icon-width-lg)',

        'button-icon-compact-sm': 'var(--button-icon-compact-width-sm)',
        'button-icon-compact': 'var(--button-icon-compact-width)',
        'button-icon-compact-lg': 'var(--button-icon-compact-width-lg)'
      },
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
        10.5: '2.625rem',
        '8xl': '84rem'
      },
      strokeWidth: {
        icon: 'var(--icon-stroke-width)'
      },
      borderWidth: {
        button: 'var(--button-border-width)',
        input: 'var(--input-border-width)'
      },
      borderRadius: {
        card: 'var(--card-border-radius)',
        alert: 'var(--alert-border-radius)',
        input: 'var(--input-border-radius)',
        button: 'var(--button-border-radius)',
        'button-icon': 'var(--button-icon-border-radius)',
        sm: 'var(--border-radius--sm)',
        DEFAULT: 'var(--border-radius)',
        md: 'var(--border-radius--md)',
        lg: 'var(--border-radius--lg)',
        xl: 'var(--border-radius--xl)',
        '2xl': 'var(--border-radius--2xl)',
        '3xl': 'var(--border-radius--3xl)'
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10'
      },
      fontSize: {
        xs: ['0.8rem', '1rem']
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    require('tailwindcss-react-aria-components'),
    require('@tailwindcss/container-queries'),
    require('tailwindcss-animate'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value
            };
          }
        },
        {
          values: theme('transitionDelay')
        }
      );
    })
  ]
};
