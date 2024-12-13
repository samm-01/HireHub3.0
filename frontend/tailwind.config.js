// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",  // Add this line
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A202C',      // Dark Blue/Teal
        secondary: '#48BB78',    // Light Green
        accent: '#3182CE',       // Azure Blue
        textDark: '#2D3748',     // Dark Gray
        textLight: '#E2E8F0',    // Light Gray
        lightGray: '#F7FAFC',    // Light Gray Background

      },
    },
  },
  plugins: [],
}
