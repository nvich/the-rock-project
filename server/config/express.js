const express         = require('express');
const bodyParser      = require('body-parser');
const cookieParser    = require('cookie-parser');
const expressSession  = require('express-session');
const methodOverride  = require('method-override');
const cors            = require('cors');

module.exports = (app, envConfig, passport) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use(methodOverride());
  app.use(cookieParser());

  app.set('views', './server/views');
  app.set('view engine', 'ejs');

  app.use(expressSession({
    secret: 'keyboard cat',
    saveUninitialized: true,
    resave: false,
    cookie : { httpOnly: true, maxAge: 2419200000 }
  }));

  app.use(passport.initialize());
  app.use(passport.session());
  app.use('/static', express.static('./public'));
};
