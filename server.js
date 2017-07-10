const express   = require('express');
const mongoose  = require('mongoose');
const passport  = require('passport');
const app       = express();

// ENVIRONMENT CONFIG
const envConfig = require('./server/config/env');

mongoose.connect(envConfig.db);

// PASSPORT CONFIG
require('./server/config/passport')(passport);

// EXPRESS CONFIG
require('./server/config/express')(app, envConfig, passport);

// ROUTES
require('./server/config/routers')(app);

// Start server
app.listen(envConfig.port, function(){
  console.log('Server listening on port ' + envConfig.port)
});
