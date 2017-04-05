var path = require('path');
var webpack = require('webpack')
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: ['babel-polyfill', './index.js'],
    devServer: {
        inline: true,
        port: 3001
    },
    output: {
        path: path.join(__dirname, "public"),
        filename: 'bundle.js',
        publicPath: ''
    },
    plugins: process.env.NODE_ENV === 'production' ? [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ] : [],

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react'
        }, {
            test: /\.scss$/,
            include: /src/,
            loaders: "style!css!autoprefixer!sass"
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url'
        }, {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000',
        }, {
            test: /\.(eot|ttf|wav|mp3|pdf)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader',
        }, ]
    },
    postcss: [autoprefixer({
        browsers: ['last 2 versions']
    })]
}