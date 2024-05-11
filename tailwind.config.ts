import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "background-primary": "#1f92ed",
        "background-body": "#191c1c",
        "background-dark": "#222525",
        border: "#2a2e2e",
        grey: "#8b9f9f",
        white: "#fff",
        "green-sun": "#56b887",
      },
    },
    transition: {
      trans: "0.4s ease",
    },
  },
  plugins: [],
};
export default config;
