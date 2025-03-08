const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: "#136277", // Custom gray
        },
        customBlue: "#1E40AF", // Example of another custom color
      },
    },
  },
};

export default config;
