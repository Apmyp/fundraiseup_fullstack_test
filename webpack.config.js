const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

const devMode = process.env.NODE_ENV !== "production";
const resourcesPath = path.resolve(__dirname, "src", "resources");
const distPath = path.resolve(__dirname, "dist");

module.exports = {
  entry: path.resolve(resourcesPath, "js", "index.js"),
  devtool: devMode ? "inline-source-map" : false,
  devServer: {
    contentBase: distPath,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[hash].css",
    }),
    !devMode && new ManifestPlugin(),
  ].filter(Boolean),
  output: {
    filename: devMode ? "bundle.js" : "bundle.[hash].js",
    path: path.resolve(distPath, 'assets'),
  },
};
