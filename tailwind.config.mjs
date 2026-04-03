/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        void:   '#07071a',
        abyss:  '#0b0b2e',
        cosmos: '#0f1040',
        nebula: '#13154d',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['"Syne"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glow-blue':   'radial-gradient(ellipse at center, rgba(56,189,248,0.15) 0%, transparent 70%)',
        'glow-purple': 'radial-gradient(ellipse at center, rgba(167,139,250,0.15) 0%, transparent 70%)',
      },
      animation: {
        'float':         'float 6s ease-in-out infinite',
        'pulse-slow':    'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee':       'marquee 28s linear infinite',
        'marquee2':      'marquee2 28s linear infinite',
        'shimmer':       'shimmer 3s linear infinite',
        'spin-slow':     'spin 20s linear infinite',
        'glow-breathe':  'glowBreathe 4s ease-in-out infinite',
        'slide-up':      'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in':       'fadeIn 0.8s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-18px)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee2: {
          '0%':   { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        glowBreathe: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%':      { opacity: '0.8', transform: 'scale(1.05)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
      boxShadow: {
        'glow-sm':  '0 0 10px rgba(99,102,241,0.35)',
        'glow-md':  '0 0 24px rgba(99,102,241,0.45), 0 0 48px rgba(99,102,241,0.15)',
        'glow-lg':  '0 0 40px rgba(99,102,241,0.55), 0 0 80px rgba(99,102,241,0.2)',
        'glow-blue':'0 0 24px rgba(56,189,248,0.4)',
        'glow-violet':'0 0 24px rgba(167,139,250,0.4)',
        'card':     '0 4px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
        'card-hover':'0 8px 48px rgba(0,0,0,0.6), 0 0 24px rgba(99,102,241,0.25)',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
