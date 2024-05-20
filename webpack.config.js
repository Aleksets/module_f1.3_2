const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { plugins } = require('@babel/preset-env/lib/plugins-compat-data');
const { template } = require('@babel/core');

module.exports = {
    entry:  "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /none_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
                template: "./src/index.html"
        })
    ]
}