const express   = require('express');
const router    = express.Router();

module.exports = (app) => {
  app.use('/api', router);
  // API routes
  require('../api/foods')(router);
  require('../api/users')(router);
};
