const express = require('express');
const app = express();
var port = 3018;

// body-parser is used to parse data received from request body
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// registering routes that we defined
var routes = require('./api/routes/extractionRoutes');
routes(app);

app.listen(port);
console.log('Started mock extraction service server on port: ' + port);