// DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var apiRoutes = require('./app/routing/apiRoutes');
var htmlRoutes = require('./app/routing/htmlRoutes');

// EXPRESS
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// ROUTES
app.use('/', apiRoutes);
app.use('/', htmlRoutes);


// PORT LISTENER
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})
