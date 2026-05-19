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
        primary: '#072D39',
        cta: '#0955B4',
        'cta-bright': '#60A5FA',
        accent: '#6366F1',
        stat: '#c43573',
        divider: '#0369A1',
        'divider-bright': '#38BDF8',
        'text-primary': '#282828',
        'text-inverse': '#FFFFFF',
        'bg-light': '#F1F1F1',
        'bg-minimal': '#F4F4F4',
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif']
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
      }
    }
  }
}