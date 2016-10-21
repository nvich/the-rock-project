const express         = require('express');
const mongoose        = require('mongoose');
const bodyParser      = require('body-parser');
const passport        = require('passport');
const cookieParser    = require('cookie-parser');
const methodOverride  = require('method-override');
const cors            = require('cors');
const app             = express();

// ENVIRONMENT CONFIG
const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const envConfig = require('./server/env')[env];

mongoose.connect(envConfig.db);

// PASSPORT CONFIG
require('./server/passport')(passport);

// EXPRESS CONFIG
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(methodOverride());
app.use(cookieParser());

app.set('views', __dirname + '/server/views');
app.set('view engine', 'ejs');

app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/static', express.static(__dirname + '/public'));


// ROUTES
require('./server/routes')(app, passport);

// Start server
app.listen(envConfig.port, function(){
  console.log('Server listening on port ' + envConfig.port)
});
