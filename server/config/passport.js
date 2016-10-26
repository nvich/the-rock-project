const User          = require('../models/user');
const LocalStrategy = require('passport-local').Strategy;

module.exports = (passport) => {
  passport.use('local', new LocalStrategy({
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true
    },
    (req, username, password, done) => {
      User.findOne({ username: username }, (err, user) => {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(null, false, req.flash('loginMessage', 'Usuário não existe'));
        }

        if (!user.validPassword(password)) {
          return done(null, false, req.flash('loginMessage', 'Senha incorreta'));
        }

        return done(null, user);
      });
    }
  ));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findOne({ _id: id }, (err, user) => {
      done(err, user)
    });
  });
};
