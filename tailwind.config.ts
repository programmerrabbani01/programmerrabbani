import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        myPrimary: "#4770ff",
        myGray: "#576076",
        myBgLight:"#f0f2f5",
        myBgDark:"#0e1018",
        myBgDarkTwo:"#1a1f2c",
        myHoverPrimary:"#2563eb",
        myBorder:"#dbdfe5",
        myRgbaLight:"rgba(240,242,245,.7)",
        myDarkText:"#64748b"
      },
      fontFamily: {
        bricolageGrotesque: ["var(--font-bricolageGrotesque)", "sans-serif"],
      },
      dropShadow: {
        custom: "0 12px 12px rgba(26, 31, 44, 0.25)",
      },
      screens: {
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
