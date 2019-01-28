const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: path.join(__dirname, 'src/index.js'), 
  output: {
    path: path.join(__dirname, 'dist/js'),
    publicPath: '/js',
    filename: 'app.bundle.js'
  },

  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [{loader: "html-loader"}]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./template/index.html",
      filename: "../index.html"
    })
  ]
}