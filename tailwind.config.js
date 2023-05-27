//const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "header-blue":"#240053",
        "create-account-button":"#8807F7",
        "gradientFrom":"rgba(255, 235, 53, 1)",
        "gradientTo":"rgba(25, 253, 130, 0.99)",
        "l-blue":"#3D0072",
        "card":"#FFFDF2",
        "l-red":"#E8356D",
        "l2-red":"#E6366E"

      },
      fontFamily:{
        "cab-regular":"Cabinet-Grotesk-Regular",
        "cab-thin":"Cabinet-Grotesk-Thin",
        "cab-extra-light":"Cabinet-Grotesk-Extralight",
        "cab-light":"Cabinet Grotesk Light",
        "cab-medium":"Cabinet Grotesk Medium",
        "cab-bold":"Cabinet Grotesk Bold",
        "cab-extra-bold":"Cabinet Grotesk Extrabold",
        "cab-black":"Cabinet Grotesk Black"
      },
      fontSize:{

      }
    },
  },
  plugins: [],
}

