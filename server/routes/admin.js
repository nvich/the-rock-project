const express   = require('express');
const passport  = require('passport');
const User      = require('../models/user');
const router    = express.Router();

module.exports = (app) => {
  app.use('/admin', router);
  // admin route
  router.get('/admin', (req, res) => {
    res.render('admin/login');
  });

  router.get('/admin/register', (req, res) => {
    res.render('admin/register', {});
  });
  router.post('/admin/register', (req, res) => {
    User.register(new User({
      username: req.body.username
    }), req.body.password, (err, user) => {
      if (err) {
        return res.render('admin/register', { user : user });
      }
      passport.authenticate('local')(req, res, () => {
        req.session.save(function (err) {
          if (err) {
            return next(err);
          }
          res.redirect('/admin/dashboard');
        });
      });
    });
  });

  router.get('/admin/dashboard', passport.authenticate('local'), (req, res) => {
    res.render('admin/dashboard', {user: req.user});
  });

  router.get('/admin/login', function(req, res) {
    res.render('admin/login', { user : req.user });
  });
  router.post('/admin/login', passport.authenticate('local'), (req, res) => {
    res.redirect('/admin/dashboard');
  });

  router.get('/admin/logout', function(req, res) {
    req.logout();
    res.redirect('/admin/login');
  });

  router.get('/admin/foods', (req, res) => {
    res.render('admin/foods');
  });

  router.get('/admin/users', (req, res) => {
    res.render('admin/users');
  });
}
