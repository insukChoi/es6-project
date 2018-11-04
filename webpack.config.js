const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: ['./src/index'],
    output : {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ],
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.jsx', '.css'],
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader', 'babel-loader']
        }]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()]
    }
}