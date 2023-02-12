const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const webpack = require("webpack");


module.exports = {
  entry: {
    index: "./src/index.js",
    courses: "./src/pages/courses.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      mnt: "moment",
      $: "jquery",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      chunks: ["index"],
      inject: true,
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/pages/courses.html"),
      //chunk is basically the entry point
      chunks: ["courses"],
      inject: true,
      filename: "courses.html",
    }),
  ],
  optimization: {
    //move shared library into common build
    splitChunks: {
      chunks: "all",
    },
  },
};
