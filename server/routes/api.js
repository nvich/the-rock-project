const express = require('express');
const router  = express.Router();

// API routes
require('../api/foods')(router);
require('../api/users')(router);

module.exports = router;
