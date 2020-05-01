const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const merge = require("webpack-merge")
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin

const common = require("./webpack.common.js")

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([{ from: "public", to: "" }]),
    // new BundleAnalyzerPlugin(),
  ],
})
