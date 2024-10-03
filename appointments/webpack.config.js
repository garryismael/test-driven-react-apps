const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Correct alias for @
    },
    extensions: [".js", ".jsx", ".json"], // Should be directly under resolve
    mainFields: ["browser", "module", "main"], // Also directly under resolve
  },
};
