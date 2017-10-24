var path = require('path');
var webpack = require("webpack");

module.exports = {
    entry: {
        "bundle.js": "./app/index.js"
    }, 
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, 'assets')
    },
    module: {
        loaders: [{
            include: path.join(__dirname, 'app'),
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['env', "react"]
            }
        }]
    }
}