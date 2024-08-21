import type { Config } from "tailwindcss";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                dark: "#141414",
                "dark-alt": "#3A3A3A",
                primary: "#88ECF6"
            }
        }
    },
    plugins: []
} satisfies Config;
