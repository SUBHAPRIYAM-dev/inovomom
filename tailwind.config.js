module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./components/*.{html,js}",
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Electric Innovation Energy
        primary: {
          DEFAULT: "#0066FF", // custom electric blue
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          500: "#3B82F6", // blue-500
          600: "#0066FF", // custom electric blue
          700: "#1D4ED8", // blue-700
          900: "#1E3A8A", // blue-900
        },
        // Secondary Colors - Future-Forward Highlights
        secondary: {
          DEFAULT: "#00D4FF", // custom bright cyan
          50: "#ECFEFF", // cyan-50
          100: "#CFFAFE", // cyan-100
          400: "#00D4FF", // custom bright cyan
          500: "#06B6D4", // cyan-500
        },
        // Accent Colors - Sustainability Wins
        accent: {
          DEFAULT: "#39FF14", // custom neon green
          50: "#F0FDF4", // green-50
          100: "#DCFCE7", // green-100
          400: "#39FF14", // custom neon green
          500: "#22C55E", // green-500
        },
        // Background Colors - Clean Canvas
        background: "#FAFBFC", // slate-50
        surface: {
          DEFAULT: "#F1F5F9", // slate-100
          hover: "#E2E8F0", // slate-200
        },
        // Text Colors - Professional Authority
        text: {
          primary: "#1E293B", // slate-800
          secondary: "#64748B", // slate-500
          muted: "#94A3B8", // slate-400
        },
        // Status Colors
        success: {
          DEFAULT: "#10B981", // emerald-500
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
        },
        warning: {
          DEFAULT: "#F59E0B", // amber-500
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
        },
        error: {
          DEFAULT: "#EF4444", // red-500
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
        },
        // Border Colors
        border: {
          DEFAULT: "#E2E8F0", // slate-200
          light: "#F1F5F9", // slate-100
        },
      },
      fontFamily: {
        // Headlines - Modern Authority
        'space-grotesk': ['Space Grotesk', 'system-ui', 'sans-serif'],
        // Body - Exceptional Readability
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        // Default sans
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        // Technical Specifications
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'hero': '0 25px 50px -12px rgba(0, 102, 255, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
      transitionDuration: {
        '300': '300ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
        'in-out': 'ease-in-out',
      },
      backdropBlur: {
        'xs': '2px',
      },
      gradientColorStops: {
        'primary-start': '#0066FF',
        'primary-end': '#00D4FF',
        'accent-start': '#39FF14',
        'accent-end': '#10B981',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}