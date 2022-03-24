const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/simulation.js',
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      title: 'Langton\'s Ant',
      template: './src/template.pug',
      minify: { collapseWhitespace: true, removeComments: true, minifyJS: true },
    })
  ],
  module: {
    rules: [
      { test: /\.(js)$/, use: { loader: 'babel-loader' } },
      { test: /\.pug$/, use: { loader: 'pug-loader' } }
    ]
  }
};
