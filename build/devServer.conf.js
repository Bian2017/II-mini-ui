

module.exports = function ({ publicPath, contentBase, protocol, host }) {
  return {
    compress: true,
    contentBase,
    hot: true,
    inline: true,
    quiet: true,
    publicPath,
    https: protocol === 'https',
    host,
 } 
}