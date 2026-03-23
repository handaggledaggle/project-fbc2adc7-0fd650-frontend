import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pt: {
          primary: "#0891B2",
          secondary: "#22D3EE",
          cta: "#22C55E",
          background: "#ECFEFF",
          surface: "#F8FEFF",
          text: {
            primary: "#164E63",
            secondary: "#0F4B57",
          },
          border: "#A5F3FC",
          error: "#EF4444",
          success: "#10B981",
        },
      },
      fontFamily: {
        atkinson: [
          "var(--font-atkinson)",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "Apple Color Emoji",
          "Segoe UI Emoji",
        ],
      },
      boxShadow: {
        pt: "0 1px 0 rgba(6,182,212,0.03)",
      },
    },
  },
  plugins: [],
};

export default config;
