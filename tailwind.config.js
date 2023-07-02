/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./ui/components/**/*.{js,ts,jsx,tsx}",
    "./ui/pages/**/*.{js,ts,jsx,tsx}",
    "./ui/layouts/**/*.{js,ts,jsx,tsx}",
    "./ui/views/**/*.{js,ts,jsx,tsx}",
    "./ui/icons/**/*.{js,ts,jsx,tsx}",
    "./ui/skeletons/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require("@tailwindcss/forms")],
};