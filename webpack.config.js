var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: '#eval-source-map',
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
        exclude: /node_modules/,
        query: {
          "presets": ["es2015", "react"],
        }
      },
    ]
  },
  devServer: {
    contentBase: './',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('development') }
    }),
  ]
}
