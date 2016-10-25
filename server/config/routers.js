const router      = require('../routers/app/index');
const adminRouter = require('../routers/app/admin');
const apiRouter   = require('../routers/api/api');


module.exports = (app) => {
  app.use('/', router);
  app.use('/api', apiRouter);
  app.use('/', adminRouter);

  app.use((req, res, next) => {
    res.status(404);
    res.render('404/index', {title: '404'});
  });
};
