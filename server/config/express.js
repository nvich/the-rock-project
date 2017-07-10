const express         = require('express');
const session         = require('express-session');
const mongoStore      = require('connect-mongo')(session);
const bodyParser      = require('body-parser');
const cookieParser    = require('cookie-parser');
const methodOverride  = require('method-override');
const cors            = require('cors');
const flash           = require('connect-flash');

module.exports = (app, envConfig, passport) => {
  app.set('views', './server/views');
  app.set('view engine', 'ejs');
  app.use('/static', express.static('./public'));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use(methodOverride());
  app.use(cookieParser());

  //express/mongo session storage
  app.use(session({
      secret: envConfig.sessionSecret,
      resave: false,
      saveUninitialized: true,
      cookie : { httpOnly: true, maxAge: 2419200000 },
      store: new mongoStore({
        url: envConfig.db,
        collection: 'sessions'
      })
  }));

  //use passport session
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(flash());
};
