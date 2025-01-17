/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,html}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: "#EDEDED",
        secondary: "#E0E0E0",
        tertiary: "#0051A8"
      }
    }
  }
}
