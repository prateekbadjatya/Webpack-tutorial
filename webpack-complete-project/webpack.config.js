const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  entry: {
    index: "./src/index.js",
    courses: "./src/pages/courses.js",
  },
  output: {
    filename: "[name].[contenthash].js", //hashversion //help in browser caching 
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    //auto reload and monitoring changes
    //script to be written in package.json
    // "dev": "webpack serve --mode development --open",
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      //chunk is basically the entry point
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
    new CopyPlugin({
      //copy file
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets/images/banner-image.png"),
          to: path.resolve(__dirname, "dist/assets/images"),
          context: "src",
        },
      ],
    }),
    //anaylze the bundle or optimize the bundle
    new BundleAnalyzerPlugin({}),
  ],
  optimization: {
    //move shared library into common build
    splitChunks: {
      chunks: "all",
    },
  },
};
