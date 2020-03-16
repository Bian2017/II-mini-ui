const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const WebpackDevServer = require('webpack-dev-server')

const conf = require('./conf')
const webpackDevConf = require('./webpack.dev.config')
const webpackBaseConf = require('./webpack.base.config')


const { getProjectRoot } = require('./util')


const projectRoot = getProjectRoot()


const host = '0.0.0.0'
const port = 8002
const protocol = 'http'

const webpackConf = webpackMerge(webpackBaseConf, webpackDevConf)

for (const key in webpackConf.entry) {
  const entryItem = webpackConf.entry[key]
  
  webpackConf.entry[key] = [
    `${require.resolve('webpack-dev-server/client')}?/`,
    require.resolve('webpack/hot/dev-server'),
    entryItem
  ]
}

const compiler = webpack(webpackConf)

const webpackDevServerConf = require('./devServer.conf')({
  publicPath: '/',
  contentBase: path.join(projectRoot, conf.output),
  host,
  publicUrl: `${protocol}://${host}:${port}/`
})

const server = new WebpackDevServer(compiler, webpackDevServerConf)

server.listen(port, host, err => {
  if (err) {
    return console.log(err)
  }
})