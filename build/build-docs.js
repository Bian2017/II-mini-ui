const webpack = require('webpack')
const webpackMerge = require('webpack-merge')

const webpackBaseConf = require('./wepack.base.config')
const webpackProdConf = require('./webpack.prod.config')


const webpackConf = webpackMerge(webpackBaseConf, webpackProdConf)
const webpackCompiler = webpack(webpackConf)

webpackCompiler.run((err, stats) => {
  console.log('err', err)
  console.log('stats:', stats)
})