const User          = require('./models/user');
const LocalStrategy = require('passport-local').Strategy;

module.exports = (passport) => {
  passport.use('local', new LocalStrategy({
      usernameField: 'username',
      passwordField: 'password'
    },
    (username, password, done) => {
      User.findOne({ username: username }, (err, user) => {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(null, false, { message: 'Usuário não existe.' });
        }

        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Senha incorreta' });
        }

        return done(null, user);
      });
    }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};
