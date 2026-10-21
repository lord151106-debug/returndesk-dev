import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17211f",
        muted: "#66736f",
        canvas: "#f6f8f7",
        brand: "#176b57",
      },
      boxShadow: {
        panel: "0 12px 36px rgba(23, 33, 31, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
