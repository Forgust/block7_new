const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')


module.exports = {

    entry: {
        main: './src/js/index.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                MiniCssExtractPlugin.loader, // Extract css to separate file
                'css-loader', // translates CSS into CommonJS
                'postcss-loader', // parse CSS and add vendor prefixes to CSS rules
                'sass-loader' // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    }
}