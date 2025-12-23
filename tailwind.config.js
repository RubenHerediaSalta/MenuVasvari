/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'terracota': '#9C6B5B',     // Adobe suave
        'olive': '#6B7D5E',         // Verde oliva apagado (viñedos)
        'charcoal': '#4A4A4A',      // Gris carbón (texto)
        'cream': '#FAF8F5',         // Blanco hueso/papel acuarela
      },
      fontFamily: {
        'serif': ['var(--font-playfair)', 'Georgia', 'serif'],
        'sans': ['var(--font-lato)', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}