const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const { getProjectRoot } = require('./util');

const projectRoot = getProjectRoot();
const siteRoot = path.join(projectRoot, 'docs');

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
          },
          {
            test: /\.yml$/,
            // 当使用多个loaders，应在所有的转换规则(loader)之前加上感叹号
            loader: 'json-loader!yaml-loader' // 将yaml转换成JSON
          },
          {
            test: /\.(css|scss|sass)$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  // 用于配置「css-loader 作用于 @import 的资源之前」有多少个 loade
                  importLoaders: 1 // 0 => 无 loader(默认); 1 => postcss-loader; 2 => postcss-loader, sass-loader
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: () => [
                    autoprefixer({
                      overrideBrowserslist: [
                        'ie >= 9',
                        'Chrome >= 21',
                        'Firefox >= 1',
                        'Edge >= 13',
                        'last 3 versions'
                      ],
                      flexbox: 'no-2009'
                    })
                  ]
                }
              },
              'sass-loader'
            ]
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
};
