import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["TildaSans", "sans-serif"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#6A7B61",
        secondary: "#D5B899",
        lightGrey: "#E9E9E9",
        grey: "#292929",
        primaryLight: "#A2B19A"
      },
      keyframes: {
        'fade-in-top': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'fade-in-top': 'fade-in-top 0.3s ease-out'
      }
    },
  },
  plugins: [],
} satisfies Config;
