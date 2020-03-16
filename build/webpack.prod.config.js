const path = require('path')

const conf = require('./conf')
const { getProjectRoot } = require('./util')

const projectRoot = getProjectRoot()

module.exports = {
  mode: 'none',
  output: {
    path: path.resolve(projectRoot, conf.output),
    filename: 'js/[name].js',
    publicPath: './'
  },

}