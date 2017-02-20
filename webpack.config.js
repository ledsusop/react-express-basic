const path = require('path');

const config = {
  entry: './app/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  node: {
    fs: "empty",
    net: "empty"
  }
};

module.exports = config;