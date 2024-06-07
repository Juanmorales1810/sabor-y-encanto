import { nextui } from "@nextui-org/theme";

const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        // rest of the code
        extend: {
            animation: {
                scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
            },
            keyframes: {
                scroll: {
                    to: {
                        transform: "translate(calc(-50% - 0.5rem))",
                    },
                },
            },
        },
    },
    darkMode: "class",
    plugins: [
        addVariablesForColors,
        nextui({
            themes: {
                dark: {
                    colors: {
                        primary: {
                            DEFAULT: "#D21637",
                            foreground: "#ffffff",
                            50: "#F6AAB7",
                            100: "#F497A7",
                            200: "#F07288",
                            300: "#EC4D69",
                            400: "#E9284A",
                            500: "#D21637",
                            600: "#9F112A",
                            700: "#6C0B1C",
                            800: "#3A060F",
                            900: "#070102",
                        },
                        secondary: {
                            DEFAULT: "#39d8b0",
                            foreground: "#000000",
                            50: "#D2F6ED",
                            100: "#C1F3E6",
                            200: "#9FECD9",
                            300: "#7DE5CB",
                            400: "#5BDFBE",
                            500: "#39D8B0",
                            600: "#24B591",
                            700: "#1A866B",
                            800: "#115746",
                            900: "#082920",
                        },
                        focus: "#248b71",
                    },
                },
                light: {
                    colors: {
                        primary: {
                            DEFAULT: "#D21637",
                            foreground: "#ffffff",
                            50: "#F6AAB7",
                            100: "#F497A7",
                            200: "#F07288",
                            300: "#EC4D69",
                            400: "#E9284A",
                            500: "#D21637",
                            600: "#9F112A",
                            700: "#6C0B1C",
                            800: "#3A060F",
                            900: "#070102",
                        },
                        secondary: {
                            DEFAULT: "#39d8b0",
                            foreground: "#000000",
                            50: "#D2F6ED",
                            100: "#C1F3E6",
                            200: "#9FECD9",
                            300: "#7DE5CB",
                            400: "#5BDFBE",
                            500: "#39D8B0",
                            600: "#24B591",
                            700: "#1A866B",
                            800: "#115746",
                            900: "#082920",
                        },
                        focus: "#248b71",
                    },
                },
            },
        }),
    ],
};
function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}
