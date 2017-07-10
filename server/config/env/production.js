const path      = require('path');
const rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  rootPath: rootPath,
  db: 'mongodb://localhost:27017/the-rock',
  port: process.env.PORT || 3000,
  sessionSecret: 'theRock'
};
