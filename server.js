const express         = require('express');
const mongoose        = require('mongoose');
const bodyParser      = require('body-parser');
const expressSession  = require('express-session');
const passport        = require('passport');
const cookieParser    = require('cookie-parser');
const methodOverride  = require('method-override');
const cors            = require('cors');

const app             = express();

// ENVIRONMENT CONFIG
const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const envConfig = require('./server/config/env')[env];

mongoose.connect(envConfig.db);

// PASSPORT CONFIG
require('./server/config/passport')(passport);

// EXPRESS CONFIG
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(methodOverride());
app.use(cookieParser());

app.set('views', __dirname + '/server/views');
app.set('view engine', 'ejs');

app.use(expressSession({
  secret: 'keyboard cat',
  saveUninitialized: true,
  resave: false,
  cookie : { httpOnly: true, maxAge: 2419200000 }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use('/static', express.static(__dirname + '/public'));

// ROUTES
const router      = require('./server/routes/app/index');
const adminRouter = require('./server/routes/app/admin');
const apiRouter   = require('./server/routes/api/api');

app.use('/', router);
app.use('/api', apiRouter);
app.use('/', adminRouter);

app.use((req, res, next) => {
  res.status(404);
  res.render('404/index', {title: '404'});
});

// Start server
app.listen(envConfig.port, function(){
  console.log('Server listening on port ' + envConfig.port)
});
