const passport      = require('passport');
const User          = require('./models/user');
const LocalStrategy = require('passport-local').Strategy;

module.exports = () => {
  passport.use(User.createStrategy());

  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());
};
