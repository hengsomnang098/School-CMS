/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/app/layout/index.css", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        khmermont: ["Khmer OS Battambang", "serif", "Roboto"],
        robot: ["Roboto", "serif"],
      },

      backgroundImage: {
        "custom-gradient": "linear-gradient(45deg, #2ECC71, #34495E)",
      },
      colors: {
        "bg-main-color": "#10AC84",
      },
    },
  },
  plugins: [],
};
