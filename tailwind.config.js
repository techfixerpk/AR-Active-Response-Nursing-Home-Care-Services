
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // Blue for medical trust
        secondary: '#10b981', // Green for health
        accent: '#f59e0b', // Amber for alerts/actions
      },
    },
  },
  plugins: [],
}
