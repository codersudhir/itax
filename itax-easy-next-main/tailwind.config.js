// /** @type {import('tailwindcss').Config} */
// module.exports = {
// 	content: [
// 		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
// 		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
// 		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
// 	],
// 	theme: {
// 		extend: {
// 			backgroundImage: {
// 				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
// 				"gradient-conic":
// 					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
// 			},
// 		},
// 	},
// 	plugins: [],
// }

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/App/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app_old/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionProperty: {
        size: "width, height",
      },
      colors: {
        primary: "hsl(var(--primary) / <alpha-value>)",
        secondary: "hsl(var(--secondary) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)",
        txt: "hsl(var(--txt) / <alpha-value>)",
        bg_1: "hsl(var(--bg_1) / <alpha-value>)",
        bg_2: "hsl(var(--bg_2) / <alpha-value>)",

        /* old colors 👇*/

        // primary: 'rgb(0, 85, 212)',
        // primary_light: 'rgb(0, 85, 212, 0.3)',
        // secondary: '#6600b9',
        "--clr-accent-100": "hsl(13, 100%, 96%)",
        "--clr-accent-150": "#39a845",
        "--clr-accent-200": "hsl(322, 100%, 50%)",
        "--clr-accent-250": "hsl(0, 100%, 50%)",
        "--clr-accent-350": "hsl(273, 100%, 44%)",
        "--clr-accent-400": "hsl(273, 100%, 36%)",
        "--clr-primary-400": "hsl(228, 39%, 23%)",
        "--clr-neutral-100": "hsl(0, 0%, 98%)",
        "--clr-neutral-200": "hsl(0, 0%, 97%)",
        "--clr-neutral-400": "hsl(227, 12%, 61%)",
        "--clr-neutral-900": "hsl(233, 12%, 13%)",
      },
    },
  },
  plugins: [
    require("tailwindcss-scoped-groups")({
      groups: ["one", "two"],
    }),
  ],
  darkMode: "class",
};
export default config;
