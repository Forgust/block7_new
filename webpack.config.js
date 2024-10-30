const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')


module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './js/index.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './html/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                MiniCssExtractPlugin.loader, 
                'css-loader',
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                MiniCssExtractPlugin.loader, 
                'css-loader',
                'postcss-loader', 
                'sass-loader' 
                ]
            }
        ]
    }
}