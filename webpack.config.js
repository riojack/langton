const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
  mode: 'development',
  entry: './src/simulation.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Langton\'s Ant',
      template: './src/template.html',
      inlineSource: '.(js|css)$',
      minify: { collapseWhitespace: true },
    }),
    new HtmlWebpackInlineSourcePlugin()
  ],
  module: {
    rules: [{
      test: /\.(js)$/,
      use: {
        loader: 'babel-loader',
      },
    }]
  }
};
