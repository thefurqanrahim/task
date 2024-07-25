import type { Config } from "tailwindcss";

const config: Config = {
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
          'thirdSec-gradient': 'linear-gradient(180deg, #2F5478 0%, #22405C 100%)',
      },
      colors: {
        navIconColor: '#294F74',
        bannerHeadingColor: "#294F74",
        footerBgColor: "#294F74",
        footerHeading: "#1D2939",
        mailHeadingColor: "#475467",
        iconBg: "#F2F4F7",
        cardDesc: "#344054",
        chipColor: "#F9FAFB",
        chipTxtColor: "#667085",
        dropDownColor: "#EDF2F5",
        btnBorder: "#EAECF0"
      },
      lineHeight: {
        '76': '76px',
      },
      borderRadius: {
        '500': '500px',
        '36': '36px' 
      },
      padding: {
        '80': '80px', 
      },
    },
  },
  plugins: [],
};
export default config;
