const path = require('path');
// import path from 'path';
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {

    mode: 'development',

    entry: {
        main: './src/scripts/Index.ts',
    },

    devtool: 'inline-source-map',

    output: {
        filename: "js/bundle.js",
        path: path.resolve(__dirname, '../', 'build'),

        // second arg ('../') is exit from actual folder where is  config file for webpack
    },

    devServer: {
        open: 'Firefox',
        contentBase: path.resolve(__dirname, "../", 'public'),

        // contentbase zasoby statyczne w projekcie. dirname - ścieżka bezwzględna z głównego katalogu.

        compress: true,
        port: 9000
    },

    plugins: [

        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin(
            {
                filename: "index.html",
                title: 'Generator Planet',
                template: 'src/Index.html',
            }
        ),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: 'css/[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),


    ],

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },

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
                test: /\.(png|svg|jpg|gif)$/i,
                use: [

                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            options: {
                                name: '[path][name].[ext]',
                            },
                        },
                    },

                    {
                        loader: 'file-loader',
                        options: {
                            name: '[folder]/[name].[ext]',
                            outputPath: 'images',

                        },
                    },


                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']


            },



        ],

    },

    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },

};



