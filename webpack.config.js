const path = require("path");

module.exports = {
  entry: { index: "./x.js" },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        type: "javascript/auto",
        test: /\.json$/,
        use: ["url-loader"]
      }
    ]
  }
};
