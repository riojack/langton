const PugPlugin = require('pug-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/template.pug'
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    publicPath: '',
    filename: '[name].[contenthash:8].js'
  },
  plugins: [
    new PugPlugin({
      modules: [
        PugPlugin.extractCss({
          filename: '[name].[contenthash:8].css'
        }),
      ],
    })
  ],
  module: {
    rules: [
      { test: /\.pug$/, exclude: /node_modules/, loader: PugPlugin.loader },
      { test: /\.css$/, use: ['css-loader'] }
    ]
  }
};
