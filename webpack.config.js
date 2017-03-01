var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var nodeExternals = require('webpack-node-externals');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var isProduction = process.env.NODE_ENV === 'production';
var productionPluginDefine = isProduction ? [
        new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify('production')}})
    ] : [];
var clientLoaders = isProduction ? productionPluginDefine.concat([
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }, sourceMap: false })
    ]) : [];

var commonLoaders = [
    {
        test: /\.json$/,
        loader: 'json-loader'
    }
];

var staticFilePatterns = [{ from: './static', to: '../static'}];

module.exports = [
    {
        entry: './src/server.js',
        output: {
            path: './dist',
            filename: 'server.js',
            libraryTarget: 'commonjs2',
            publicPath: '/'
        },
        target: 'node',
        node: {
            console: false,
            global: false,
            process: false,
            Buffer: false,
            __filename: false,
            __dirname: false
        },
        externals: nodeExternals(),
        plugins: productionPluginDefine,
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader'
                }
            ].concat(commonLoaders)
        }
    },
    {
        entry: './src/app/browser.js',
        output: {
            path: './dist/assets',
            publicPath: '/',
            filename: 'bundle.js'
        },
        plugins: clientLoaders.concat([
            new ExtractTextPlugin( {
                filename: 'index.css',
                allChunks: true
            }),
            new CopyWebpackPlugin(staticFilePatterns)
        ]),
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.jsx$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract('css!sass')
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx']
        }
    }
];