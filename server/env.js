const path      = require('path');
const rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://localhost:27017/the-rock',
    port: process.env.PORT || 3000
  },
  production: {
    rootPath: rootPath,
    db: process.env.MONGOLAB_URI || '',
    port: process.env.PORT || 80
  }
};
