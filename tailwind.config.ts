import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Two-color theme: everything on the site is a tint or shade of
        // dark navy or semi-cream-white. 'stone' and 'slate' (the neutral
        // scale used throughout for text/backgrounds/borders in light and
        // dark mode respectively) are overridden here so every existing
        // utility class automatically stays on-palette.
        stone: {
          50: '#f7f3e7',
          100: '#e7e4da',
          200: '#d2d0ca',
          300: '#b9b9b6',
          400: '#9b9d9e',
          500: '#7d8186',
          600: '#5f646e',
          700: '#444b58',
          800: '#2d3546',
          900: '#111b30',
        },
        slate: {
          50: '#f7f3e7',
          100: '#e7e4da',
          200: '#d2d0ca',
          300: '#b9b9b6',
          400: '#9b9d9e',
          500: '#7d8186',
          600: '#5f646e',
          700: '#444b58',
          800: '#2d3546',
          900: '#111b30',
        },
        // A slightly more saturated navy, used for links / highlights so
        // they read as distinct from body text while staying navy+cream.
        accent: {
          50: '#ecf0f9',
          100: '#d5dae6',
          200: '#bfc5d2',
          300: '#a4abbb',
          400: '#8991a4',
          500: '#6d778d',
          600: '#57617a',
          700: '#404c66',
          800: '#273451',
          900: '#0a1838',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        sans: ['var(--font-open-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
