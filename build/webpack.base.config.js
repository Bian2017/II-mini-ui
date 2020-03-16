const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { getProjectRoot } = require('./util')

const projectRoot = getProjectRoot()
const siteRoot = path.join(projectRoot, 'docs')

module.exports = {
  entry: {
    index: `${siteRoot}/app.jsx`
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.jsx?$/,
            use: 'babel-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@md': path.resolve(__dirname, '../docs/markdown/')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${siteRoot}/index.html`
    })
  ]
}