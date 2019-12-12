const path = require('path');
// import path from 'path';
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {

    mode: 'production',

    entry: {
        main: './src/scripts/Generator.js'
    },

    output: {
        filename: "js/bundle.js",
        path: path.resolve(__dirname, '../', 'prod'),
        // drugi argument to wyjście z folderu gdzie jest plik konfiguracyjny dla webpacka
    },

    devtool: 'hidden-source-map',

    plugins: [

        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin(
            {
                filename: "index.html",
                title: 'Generator Planet',
                template: 'src/index.html',
            }
        ),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name]-[hash].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),


    ],

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loader: 'file-loader',
                options: {

                    name: '[name][ext]',
                    output: 'images',
                }


            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']


            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            options: {
                                name: '[name].[ext]',
                            },
                        },
                    },
                ],
            },
        ],
    },

};