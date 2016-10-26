const express  = require('express');
const passport = require('passport');
const User     = require('../../models/user');
const router   = express.Router();
const isAuthenticated = require('../../middlewares/authorization').isAuthenticated;

require('./admin/users')(router, isAuthenticated);
require('./admin/foods')(router, isAuthenticated);

// admin route
router.get('/admin', isAuthenticated, (req, res) => {
  res.redirect('/admin/dashboard');
});

router.post('/admin/login', passport.authenticate('local', {
  successRedirect: '/admin/dashboard',
  failureRedirect: '/admin/login'
}));

router.get('/admin/register', (req, res) => {
  res.render('admin/register', {title: "Cadastro"});
});
router.post('/admin/register', (req, res) => {
  User.register(new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  }), req.body.password, (err, user) => {
    if (err) {
      return res.render('admin/register', { user : user });
    }
    passport.authenticate('local')(req, res, () => {
      req.session.save((err) => {
        if (err) {
          return next(err);
        }
        res.redirect('/admin/dashboard');
      });
    });
  });
});

router.get('/admin/dashboard', isAuthenticated, (req, res) => {
  res.render('admin/dashboard', {title: "Dashboard"});
});
router.get('/admin/login', (req, res) => {
  res.render('admin/login', {title: "Login"});
});
router.get('/admin/logout', isAuthenticated, (req, res) => {
  req.logout();
  res.redirect('/admin/login');
});

module.exports = router;
