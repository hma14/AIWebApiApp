const path = require("path")

module.exports = {
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@styler": path.resolve(__dirname, "src/styles"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
}
