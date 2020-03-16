const fs = require('fs-extra')
const path = require('path')

fs.emptyDirSync(path.resolve(__dirname, '../docs/h5'))


fs.copy(path.resolve(__dirname, '../dist/h5'), path.resolve(__dirname, '../docs/h5'))