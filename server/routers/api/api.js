const express = require('express');
const router  = express.Router();

// API routers
require('./foods')(router);

module.exports = router;
