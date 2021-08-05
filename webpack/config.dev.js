const webpack = require("webpack")
const {merge} = require("webpack-merge")
const common = require("./config.common.js")
const NunjucksWebpackPlugin = require("./NunjucksWebpackPlugin")

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    noInfo: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{loader: "style-loader"}, {loader: "css-loader"}],
      },
    ],
  },
  plugins: [
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
})
