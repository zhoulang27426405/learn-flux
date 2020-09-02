const path = require('path')

module.exports = {
  mode: 'development',
  entry: './index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [ path.resolve(__dirname, './node_modules') ],
        use: 'babel-loader'
      }
    ]
  }
}
