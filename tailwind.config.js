/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite", // Slow rotation
      },
      screens: {
        xs: "380px",
        sm: "640px", // Small devices
        md: "768px", // Medium devices
        lg: "1024px", // Large devices
        xl: "1280px", // Extra large devices
        "2xl": "1536px", // 2x extra large devices
        // Custom Breakpoints (if needed)
        tablet: "900px",
        desktop: "1200px",
      },
    },
  },
  plugins: [],
};
