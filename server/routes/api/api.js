const express = require('express');
const router  = express.Router();

// API routes
require('./foods')(router);

module.exports = router;
