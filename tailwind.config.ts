import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(240 5.9% 10%)",
        foreground: "hsl(210 40% 98%)",
        card: {
          DEFAULT: "hsl(222.2 84% 4.9%)",
          foreground: "hsl(210 40% 98%)",
        },
        popover: {
          DEFAULT: "hsl(222.2 84% 4.9%)",
          foreground: "hsl(210 40% 98%)",
        },
        primary: {
          DEFAULT: "hsl(210 40% 98%)",
          foreground: "hsl(222.2 47.4% 11.2%)",
        },
        secondary: {
          DEFAULT: "hsl(217.2 32.6% 17.5%)",
          foreground: "hsl(210 40% 98%)",
        },
        muted: {
          DEFAULT: "hsl(217.2 32.6% 17.5%)",
          foreground: "hsl(215 20.2% 65.1%)",
        },
        accent: {
          DEFAULT: "hsl(217.2 32.6% 17.5%)",
          foreground: "hsl(210 40% 98%)",
        },
        destructive: {
          DEFAULT: "hsl(0 62.8% 30.6%)",
          foreground: "hsl(210 40% 98%)",
        },
        border: "hsl(217.2 32.6% 17.5%)",
        input: "hsl(217.2 32.6% 17.5%)",
        ring: "hsl(212.7 26.8% 83.9%)",
        chart: {
          "1": "hsl(220 70% 50%)",
          "2": "hsl(160 60% 45%)",
          "3": "hsl(30 80% 55%)",
          "4": "hsl(280 65% 60%)",
          "5": "hsl(340 75% 55%)",
        },
        sidebar: {
          DEFAULT: "hsl(222.2 84% 4.9%)",
          foreground: "hsl(240 4.8% 95.9%)",
          primary: "hsl(224.3 76.3% 48%)",
          "primary-foreground": "hsl(0 0% 100%)",
          accent: "hsl(217.2 32.6% 17.5%)",
          "accent-foreground": "hsl(240 4.8% 95.9%)",
          border: "hsl(217.2 32.6% 17.5%)",
          ring: "hsl(217.2 91.2% 59.8%)",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
