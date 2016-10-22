const express   = require('express');
const apiRouter = express.Router();
const router    = express.Router();

module.exports = (app) => {
  app.use('/api', apiRouter);
  // API routes
  require('./api/foods')(apiRouter);
};
