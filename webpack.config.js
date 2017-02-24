
var webpack = require('webpack');

module.exports = {
    context:  __dirname + '/app',
    entry: './index.js',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },
    plugins:[
        new webpack.DefinePlugin({
            ON_TEST: process.env.NODE_ENV === 'test'
        })
    ],
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.html$/, loader: 'raw-loader', exclude: /node_modules/},
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader', exclude: /node_modules/}
        ]
    }
    
};