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
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [{loader: "html-loader"}]
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '../images',
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./template/index.html",
      filename: "../index.html"
    })
  ]
}