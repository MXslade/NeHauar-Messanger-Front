module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: "var(--bg-color-main)",
        secondary: "var(--bg-color-secondary)",
        "button-main": "var(--button-color-main)",
        "button-main-hover": "var(--button-color-main-hover)",
        search: "var(--search-bg-color)",
        "text-secondary": "var(--placeholder-bg-color)",
        highlighted: "var(--bg-color-highlighted)",
        message: "var(--bg-message-color)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
