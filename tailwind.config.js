/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      width: {
        128: "114rem",
      },
    },
    screens: {
      sm: "375px",
      xl: "1440px",
    },
    colors: {
      "Strong-cyan": "hsl(172, 67%, 45%)",

      "Verydark-cyan": "hsl(183, 100%, 15%)",
      "Dark-grayish-cyan": "hsl(186, 14%, 43%)",
      " Grayish-cyan": "hsl(184, 14%, 56%)",
      "Light-grayish-cyan": " hsl(185, 41%, 84%)",
      "Verylight-grayish-cyan": "hsl(189, 41%, 97%)",
      White: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      sans: ["Space Mono", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    // container: {
    //   padding: "2rem",
    //   center: true,
    // },
  },
};
