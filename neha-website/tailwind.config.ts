import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        antiqua: [
          '"Book Antiqua"',
          '"Palatino Linotype"',
          "Palatino",
          "Georgia",
          "serif",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
