/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "dark-mode-elements": {
                    DEFAULT: "hsl(209, 23%, 22%)",
                },
                "dark-mode-background": {
                    DEFAULT: "hsl(207, 26%, 17%)",
                },
                "light-mode-text": {
                    DEFAULT: "hsl(200, 15%, 8%)",
                },
                "light-mode-input": {
                    DEFAULT: "hsl(0, 0%, 52%)",
                },
                "light-mode-background": {
                    DEFAULT: "hsl(0, 0%, 98%)",
                },
                "dark-mode-text-&-light-mode-elements": {
                    DEFAULT: "hsl(0, 0%, 100%)",
                },
            },
        },
    },
    plugins: [],
};
