/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all files that contain Nativewind classes.
    content: ["./app/**/*", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                bluePrimary: "#82C8E5",
                redPrimary: "#E23636",
                greenPrimary: "#82DD55" 
            }
        },
    },
    plugins: [],
}