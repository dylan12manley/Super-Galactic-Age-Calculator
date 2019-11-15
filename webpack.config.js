const path = require('path');

module.exports = {
  entry: './src/frontEndLogic.js',
  output: {
    filename: 'bundle.js',
    path:
    path.resolve(__dirname, 'dist')
  }
};
