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
        // Primary Purple Palette
        primary: {
          900: '#2D1B4E', // Darkest purple - backgrounds
          800: '#3D2660', // Dark purple - primary sections
          700: '#4D3170', // Medium dark purple - interactive
          600: '#6B47A1', // Primary - buttons, accents
          500: '#8B5CF6', // Light purple - hover states
          400: '#A78BFA', // Lighter purple
          300: '#C4B5FD', // Very light purple
          200: '#DDD6FE', // Extra light purple
          100: '#EDE9FE', // Nearly white purple
        },
        // Accent Colors
        accent: {
          cyan: '#06B6D4',
          purple: '#D8B4FE',
          gold: '#F59E0B',
        },
        // Semantic Colors
        success: '#10B981',
        // Custom neutrals
        light: {
          bg: '#F3F0FF',      // Light purple-tinted bg
          text: '#E9D5FF',    // Light purple text on dark
        },
        dark: {
          text: '#1F2937',    // Dark text on light bg
        },
        border: {
          purple: '#4D3170',  // Purple borders
          light: '#E5D4FF',   // Light purple borders
        },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        'purple-sm': '0 4px 12px rgba(45, 27, 78, 0.08)',
        'purple-md': '0 12px 24px rgba(45, 27, 78, 0.15)',
        'purple-lg': '0 20px 40px rgba(45, 27, 78, 0.3)',
        'hero': '0 25px 50px -12px rgba(45, 27, 78, 0.25)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #2D1B4E 0%, #3D2660 50%, #4D3170 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(107, 71, 161, 0.05) 0%, rgba(107, 71, 161, 0.1) 100%)',
        'text-gradient': 'linear-gradient(135deg, #6B47A1 0%, #8B5CF6 100%)',
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
