import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Purple Palette - Updated with new theme colors
        primary: {
          900: '#3a1fa3', // Darkest purple - backgrounds  
          800: '#4225C4', // Dark purple - primary sections (main background)
          700: '#533acb', // Medium dark purple
          600: '#6e1fd2', // Primary - buttons, accents
          500: '#752fbb', // Medium purple
          400: '#8A44E2', // Light purple - hover states
          300: '#894df8', // Lighter purple
          200: '#9F7AEA', // Adjusted light purple
          100: '#E9D8FD', // Subtle white purple
        },
        // Accent Colors
        accent: {
          cyan: '#06B6D4',
          purple: '#8A44E2',
          gold: '#F59E0B',
        },
        // Semantic Colors
        success: '#10B981',
        // Custom neutrals
        light: {
          bg: '#F9F6FB',      // Very light tint of #4f1071
          text: '#E9D5FF',    // Light purple text on dark
        },
        dark: {
          text: '#1F2937',    // Dark text on light bg
        },
        border: {
          purple: '#533BC6',  // Purple borders
          light: '#E5D4FF',   // Light purple borders
        },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        'purple-sm': '0 4px 12px rgba(66, 37, 196, 0.08)',
        'purple-md': '0 12px 24px rgba(66, 37, 196, 0.15)',
        'purple-lg': '0 20px 40px rgba(66, 37, 196, 0.3)',
        'hero': '0 25px 50px -12px rgba(66, 37, 196, 0.25)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #4225C4 0%, #533BC6 50%, #6e1fd2 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(83, 59, 198, 0.05) 0%, rgba(83, 59, 198, 0.1) 100%)',
        'text-gradient': 'linear-gradient(135deg, #6e1fd2 0%, #8A44E2 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}

export default config
