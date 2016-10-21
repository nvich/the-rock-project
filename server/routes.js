const express   = require('express');
const path      = require('path');
const User      = require('./models/user');
const apiRouter = express.Router();
const router    = express.Router();

const isAdmin = (req, res, next) => {
  if(req.isAuthenticated() && req.user.email === 'hemerson.lourenco@gmail.com'){
    console.log('Você é um admin');
    next();
  } else {
    console.log('Você não é um admin');
    res.redirect('/admin');
  }
}

module.exports = (app, passport) => {
  app.use('/api', apiRouter);
  app.use('/', router);

  // API routes
  require('./api/foods')(apiRouter);

  // home route
  router.get('/', (req, res) => {
    res.render('index/index');
  });

  // admin route
  router.get('/admin', (req, res) => {
    res.render('admin/login');
  });

  router.get('/admin/register', (req, res) => {
    res.render('admin/register');
  });

  router.get('/admin/dashboard', isAdmin, (req, res) => {
    res.render('admin/dashboard', {user: req.user});
  });

  router.post('/register', (req, res) => {
    // passport-local-mongoose:
    // Convenience method to register a new user instance with a given password.
    // Checks if username is unique
    User.register(new User({
      email: req.body.email
    }), req.body.password, (err, user) => {
        if (err) {
          console.error(err);
          return;
        }
        // log the user in after it is created
        passport.authenticate('local')(req, res, () => {
          console.log('authenticated by passport');
          res.redirect('/admin/dashboard');
        });
      });
  });

  router.post('/login', passport.authenticate('local'), (req, res) => {
    res.redirect('/admin/dashboard');
  });

  app.use((req, res, next) => {
    res.status(404);
    res.render('404/index');
  });

};
