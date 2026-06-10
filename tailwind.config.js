export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: 'selector',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        primary: '#011c27',
        cta: '#0955B4',
        'cta-bright': '#4A8FD9',
        accent: '#6366F1',
        stat: '#9c176d',
        divider: '#0955B4',
        'divider-bright': '#5A9AE8',
        'text-primary': '#011c27',
        'text-inverse': '#FFFFFF',
        'bg-light': '#f1f1f1',
        'bg-minimal': '#f1f1f1',
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        subtle: '0 2px 8px rgba(0, 0, 0, 0.08)',
        'subtle-dark': '0 2px 12px rgba(0, 0, 0, 0.16)',
        medium: '0 4px 16px rgba(0, 0, 0, 0.12)',
        'medium-dark': '0 8px 24px rgba(0, 0, 0, 0.20)',
      },
      borderRadius: {
        button: '6px',
        card: '12px',
        callout: '16px',
        image: '0px',
      },
      keyframes: {
        'logo-marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'logo-marquee': 'logo-marquee 45s linear infinite',
      },
    }
  }
}
