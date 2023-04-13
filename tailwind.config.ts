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
      spacing: {
        icon: "1.8rem",
      },
    },
    colors: {
      background: "#222020",
      text: "#9a9998",
      separator: "rgba(199, 209, 219, 0.1)",
      "navlink-text": "#9a9998",
      "navlink-background": "transparent",
      "navlink-background-current": "rgba(60, 57, 57, .5)",
      icon: "hsla(30,1%,60%,.85);",
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
} satisfies Config;
