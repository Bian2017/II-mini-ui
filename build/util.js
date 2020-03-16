const path = require('path')

exports.getProjectRoot = function () {
  return path.resolve(__dirname, '..')
}