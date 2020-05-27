const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const devMode = process.env.NODE_ENV !== "production";
const resourcesPath = path.resolve(__dirname, "src", "resources");
const distPath = path.resolve(__dirname, "dist");

module.exports = {
  mode: "development",
  entry: path.resolve(resourcesPath, "js", "index.js"),
  devtool: devMode ? "inline-source-map" : false,
  devServer: {
    contentBase: distPath,
  },
  module: {
    rules: [
      { 
        exclude: [path.resolve(__dirname, "node_modules")], 
        loader: "babel-loader", 
        test: /\.js?$/ 
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: [
          "vue-style-loader",
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
    new VueLoaderPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },
  output: {
    filename: devMode ? "bundle.js" : "bundle.[hash].js",
    path: path.resolve(distPath, "assets"),
  },
};
