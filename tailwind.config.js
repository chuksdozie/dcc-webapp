/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "coming-soon":
          "url('https://images.unsplash.com/photo-1612611741189-a9b9eb01d515?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        blackOverlay: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))",
      },
      colors: {
        bgBlue: "#026BFF",
        textBlue: "#045FDE",
        appYellow: "#FFD859",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      mono: ["Chivo Mono", "monospace"],
    },
  },
  plugins: [],
};
