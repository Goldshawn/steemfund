var express = require('express'), app = express(), port = process.env.PORT || 3000;

app.listen(port);

console.log('Hopefully it is working now: ' + port);
