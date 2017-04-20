const webpack = require('webpack')
const config = require('./webpack.config.js')

config["plugins"] = [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
            warnings: false
        }
    })
]

config["devtool"] = "source-map"

module.exports = config