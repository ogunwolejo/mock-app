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
        "card2":"#FEFCE8",
        "l-red":"#E8356D",
        "l2-red":"#E6366E",
        "slider":"#8807F7",
        "shade":"#10001F",
        "black":"#1B0132",
        "hover-btn":"rgba(136, 7, 247, 0.17)",
        "box":"#29014B",
        "hover-box":"#43027E",
        "paper":"#F3F4F6",
        "traction1":"#D2FFDE",
        "traction-text":"#2A332C",
        "green":"#33593D",
        "purple":"#35298A",
        "yellow":"#9F9704"

      },
      fontFamily:{
        "cab-regular":"Cabinet-Grotesk-Regular",
        "cab-thin":"Cabinet-Grotesk-Thin",
        "cab-extra-light":"Cabinet-Grotesk-Extralight",
        "cab-light":"Cabinet Grotesk Light",
        "cab-medium":"Cabinet Grotesk Medium",
        "cab-bold":"Cabinet Grotesk Bold",
        "cab-extra-bold":"Cabinet Grotesk Extrabold",
        "cab-black":"Cabinet Grotesk Black",
        "Ubuntu":"Ubuntu"
      },
      fontSize:{

      }
    },
  },
  plugins: [],
}

