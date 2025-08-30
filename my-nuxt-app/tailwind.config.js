/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fff',
        accent: '#5138ee', // SaaS purple accent [web:3][web:9]
        accentlight: '#f5f3ff', // soft purple background
        navlink: '#16192c',
        dark: '#1f2937',
        darker: '#111827',
        'text-primary': '#111927',
        'text-secondary': '#6b7280',
        'text-muted': '#a0aec0',
        border: '#e5e7eb',
      },
      fontFamily: {
        brand: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        'brand-medium': '500',
        'brand-semibold': '600',
        'brand-bold': '700',
      },
    },
  },
  plugins: [],
}
