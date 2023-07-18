const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    port: 9000,
  },

};