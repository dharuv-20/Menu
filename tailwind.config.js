/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom Earthy Brand Colors
        primary: "#33241C",      // Dark Cocoa Brown
        secondary: "#C59A6D",    // Muted Gold / Warm Tan
        background: "#E5D0B5",   // Warm Parchment / Beige
        accent: "#2C1E17",       // Dark Walnut Brown
        paper: "#F7EEDB",        // Vintage Light Beige / Parchment
        cocoa: "#33241C",        // Dark Cocoa Brown Text
        antique: "#8C6A4F",      // Antique Brown Border
        divider: "#593E2F",      // Warm Brown Divider
        hoverBg: "#DCC3A7",      // Slightly Darker Beige
        selectionBg: "#D3B69B",  // Soft Earth Brown
        successColor: "#3D5A45", // Muted Forest Green
      },
      fontFamily: {
        heading: ["Lora", "Georgia", "serif"],
        body: ["Roboto Slab", "serif"],
      },
      boxShadow: {
        'vintage-sm': '0 2px 8px rgba(51, 36, 28, 0.1)',
        'vintage-md': '0 4px 15px rgba(51, 36, 28, 0.15)',
        'vintage-lg': '0 8px 25px rgba(51, 36, 28, 0.25)',
        'vintage-inner': 'inset 0 2px 4px rgba(51, 36, 28, 0.08)',
      },
    },
  },
  plugins: [],
}
