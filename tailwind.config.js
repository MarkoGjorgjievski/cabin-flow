/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{svelte,js,ts}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", {
      cupcake: {
        ...require("daisyui/src/theming/themes")["[data-theme=cupcake]"],
        "base-100": 'rgb(250,248,250)',
        "base-200": 'rgb(239,230,234)',
        "primary": '#5C0632',
        "primary-focus": 'rgb(234, 129, 167)',
        "primary-content": '#fffafd',
        "success": "#117453",
        "--rounded-btn": "0.5rem",

      },
      dark: {
        ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
        "primary": '#5C0632',
      }
    }
    ],
  },
};
