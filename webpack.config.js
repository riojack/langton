const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
  mode: 'production',
  entry: './src/simulation.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.html',
      inlineSource: '.(js|css)$',
      minify: { collapseWhitespace: true },
    }),
    new HtmlWebpackInlineSourcePlugin()
  ],
  module: {
    rules: [{
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }]
  }
};
