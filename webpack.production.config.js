var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    devtool: 'source-map',
    entry: [
        './js/app.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    resolve: {
        extensions: ['', '.js'],
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    "presets": ["es2015", "react"]
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss')
              },
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify('production') }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new ExtractTextPlugin('main.min.css'),
        new webpack.optimize.UglifyJsPlugin()
    ],
    postcss: [
        require('postcss-import')({ // import all the css files into main.css
            from: "css/main.css"
        }),
        require('postcss-simple-vars')(), // replace the variables
        require('cssnano')({
          discardUnused: false,
          mergeIndents: false,
          reduceIdents: false,
        }),
        require('autoprefixer')({ browsers: ['last 2 versions'] })
    ]
}
