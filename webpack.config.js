var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        publicPath: "/",
        contentBase: "./client",
        hot: true
    },
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './client/index.js'
    ],
    output: {
        path: path.join(__dirname, 'client'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loaders: ['react-hot-loader', 'babel-loader?presets[]=react,presets[]=es2015'],
            exclude: /node_modules/
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}
