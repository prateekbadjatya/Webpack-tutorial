const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index: './src/index.js',
        product: './src/products.js'
    },
    output: {
        //here name is automatically pick and it will be above entry object keys
        //create two bundle file
        //index.bundle.js
        //product. bundle.js
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        //auto reload and monitoring changes
        //script to be written in package.json
            // "dev": "webpack serve --mode development --open",
        static: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(), // use the clean plugin to delete the dist folder before a build
    new HtmlWebpackPlugin(
       {
        template: path.resolve(__dirname, "src/index.html"),
        //chunk is basically the entry point
        chunks: ["index"],
        inject: true,
        filename: 'index.html'
       }
    ),
    new HtmlWebpackPlugin(
        {
         template: path.resolve(__dirname, "src/products.html"),
         //chunk is basically the entry point
         chunks: ["product"],
         inject: true,
         filename: 'product.html'
        }
     )]
}

//HTMLWebpackPlugin: 

// HTMLWebpackPlugin accepts two important arguments for the task at hand.
// The first is chunks, which accepts what chunks to add to the HTML file.
// The second is filename – which will define the name of the HTML file.

//CleanWebpackPlugin

// use the clean plugin to delete the dist folder before a build