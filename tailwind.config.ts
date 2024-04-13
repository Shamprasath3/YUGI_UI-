import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: '#121708',
        foreground: '#C1E283',
        card: '#F8F8F0',
        'card-foreground': '#333333',
        popover: '#FFFFFF',
        'popover-foreground': '#333333',
        primary: '#121708',
        'primary-foreground': '#FFFFFF',
        secondary: '#C1E283',
        'secondary-foreground': '#333333',
        muted: '#E7E7D8',
        'muted-foreground': '#666666',
        accent: '#2FEEB8',
        'accent-foreground': '#FFFFFF',
        destructive: '#FF6B6B',
        'destructive-foreground': '#FFFFFF',
        border: '#D9D9D9',
        input: '#FFFFFF',
        ring: '#333333',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config