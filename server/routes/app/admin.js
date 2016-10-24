const express  = require('express');
const passport = require('passport');
const User     = require('../../models/user');
const router   = express.Router();

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()){
    return next();
  } else {
    res.redirect('/admin/login');
  }
}

// admin route
router.get('/admin', isAuthenticated, (req, res) => {
  res.redirect('/admin/dashboard');
});

router.post('/admin/login', passport.authenticate('local', {
  successRedirect: '/admin/dashboard',
  failureRedirect: '/admin/login'
}));

router.get('/admin/register', (req, res) => {
  res.render('admin/register');
});
router.post('/admin/register', (req, res) => {
  User.register(new User({
    username: req.body.username
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
  res.render('admin/dashboard');
});
router.get('/admin/login', (req, res) => {
  res.render('admin/login');
});
router.get('/admin/logout', isAuthenticated, (req, res) => {
  req.logout();
  res.redirect('/admin/login');
});

router.get('/admin/foods', isAuthenticated, (req, res) => {
  res.render('admin/foods');
});
router.get('/admin/users', isAuthenticated, (req, res) => {
  res.render('admin/users');
});

module.exports = router;
