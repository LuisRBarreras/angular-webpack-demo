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
        }),
    ],
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            {test: /\.html$/, loader: 'raw-loader', exclude: /node_modules/ },
            {test: /\.css$/, loader: 'style-loader!css-loader' },
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader', exclude: /node_modules/ },
            { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf$/, loader: "file-loader" },
            { test: /\.eot$/, loader: "file-loader" },
            { test: /\.svg$/, loader: "file-loader" }
        ]
    }
    
};