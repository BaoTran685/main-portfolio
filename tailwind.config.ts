import { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      'sans': ['Poppins', 'Arial', 'sans-serif'],
    },
    colors: {
      ...colors,
      primary: colors.green,
      secondary: colors.yellow,
      third: colors.slate,
      fourth: colors.black,
    }
  },
  plugins: ['prettier-plugin-tailwindcss']
};
export default config;
