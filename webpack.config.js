const webpack = require("webpack")
const path = require("path")
const NunjucksWebpackPlugin = require("nunjucks-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

const packageJson = require("./package.json")

module.exports = {
  mode: "development",
  performance: {
    hints: false,
  },
  entry: ["./src/js/index"],
  devtool: "inline-source-map",
  output: {
    publicPath: "/",
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{loader: "style-loader"}, {loader: "css-loader"}],
      },
    ],
  },
  devServer: {
    contentBase: "./build",
    noInfo: true,
    hot: true,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {from: "src/favicon.ico", to: "favicon.ico"},
        {from: "src/thumb.png", to: "thumb.png"},
      ],
    }),

    new webpack.DefinePlugin({
      VERSION: JSON.stringify(packageJson.version),
    }),

    new webpack.HotModuleReplacementPlugin(),
    new NunjucksWebpackPlugin({
      templates: [
        {
          from: "./src/index.html",
          to: "index.html",
          context: {
            production: false,
            lastModified: Date.now(),
          },
        },
      ],
    }),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin(), "..."],
  },
}
