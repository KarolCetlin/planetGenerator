const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = function(env){

    let prod = env !== undefined && env.production === true;
    let dev = env !== undefined && env.development === true;

    return {
        context: __dirname,
        devtool: 'source-map',
        entry: './scripts/Generator.js',

        output: {
            publicPath: dev ? "/dist/" : '',
            path: resolve(__dirname, 'dist'),
            filename: prod ? "[name].[chunkhash].js" : "bundle.js"
        },
        serve: {},


        plugins: [
            new HtmlWebpackPlugin(
                {
                    template: './Index.html',
                }
            )

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
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                },
                {
                    test: /\.scss$/,
                    use: [
                        {loader: 'style-loader'},
                        {loader: 'css-loader'},
                        {loader: 'sass-loader'},
                    ]


                },
                {
                    test: /\.(png|jpg|gif)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                                name: '[name][ext]',
                            },
                        },
                    ],
                },
            ],
        },
    }

}