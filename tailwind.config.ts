import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateAreas: {
        layout: ["topbar topbar topbar", "sidebar main nav"],
      },
      gridTemplateColumns: {
        layout: "auto 1fr auto",
      },
      gridTemplateRows: {
        layout: "auto 1fr",
      },
    },
    colors: {
      background: "#222020",
      text: "#9a9998",
      separator: "rgba(199, 209, 219, 0.1)",
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
} satisfies Config;
