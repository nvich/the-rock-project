const express = require('express');
const router  = express.Router();

// API routes
require('./foods')(router);
require('./users')(router);

module.exports = router;
