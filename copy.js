const fs = require('fs');

fs.createReadStream('./node_modules/material-design-lite/material.min.js').pipe(fs.createWriteStream('./public/js/material.min.js'));
fs.createReadStream('./node_modules/material-design-lite/material.min.css').pipe(fs.createWriteStream('./public/css/material.min.css'));
