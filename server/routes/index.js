const express = require('express');
const router  = express.Router();

module.exports = (app) => {
  app.use('/', router);
  // home route
  router.get('/', (req, res) => {
    res.render('index/index');
  });

  app.use((req, res, next) => {
    res.status(404);
    res.render('404/index');
  });
}
