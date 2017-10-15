var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
//var urlencodedParser = bodyParser.urlencoded({extended: false});
//var jsonParser = bodyParser.json();

var PORT = 3000;

//create express instance
var app = express();

//middle ware to handle sessions
//app.use(urlencodedParser);
//app.use(jsonParser);
//USE A FAVICON app.use(favicon(__dirname + '/favicon.ico'));

//HOW TO SERVE STATIC FILES for mcclane
//app.use('/[route]', express.static('static folder'));

//ROUTES

//our home page, these lines are in every node server
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/html/index.html');
});

app.get('/css/style.css', function(req, res) {
    res.sendFile(__dirname + '/css/style.css');
});

//START THE SERVER
app.listen(PORT);
console.log('server running on port: ' + PORT)
