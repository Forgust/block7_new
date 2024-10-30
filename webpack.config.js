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
    devServer: {
        port: 4200
    },
    module: {
        rules: [
              {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    targets: "defaults",
                    presets: [
                      ['@babel/preset-env']
                    ]
                  }
                }
              },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
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
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [require('postcss-preset-env')], 
                        }
                    }
                }, 
                'sass-loader' 
                ]
            },
            {
                test: /\.woff2?$/i,
                type: 'asset/resource',
                dependency: { not: ['url'] },
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                  outputPath: 'images',
                },
            },
        ]
    }
}