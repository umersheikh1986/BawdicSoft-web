import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        zoomInOut: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },  // Default size
          '50%': { transform: 'scale(1.2)', opacity: '0.8' },  // Zoom in slightly
        },
      },
    },
    animation: {
      zoomInOut: 'zoomInOut 5s ease-in-out infinite',  // Infinite loop with ease-in-out timing
    },
    // colors: {
    //     darkSkyBlue: '#0f3654',
    // },
    plugins: [],
  }
}
export default config
