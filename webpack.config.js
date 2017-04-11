var path = require('path');

module.exports = {
  entry: './src/index.jsx',

  output: {
    filename: 'g2editor.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};
