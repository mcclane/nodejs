

var express = require('express')
var fs = require('fs')
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({extended: false})
var jsonParser = bodyParser.json()

var PORT = 3000

//create express instance
var app = express()

//middle ware to handle sessions
app.use(urlencodedParser)
app.use(jsonParser)
//USE A FAVICON app.use(favicon(__dirname + '/favicon.ico'));

//HOW TO SERVE STATIC FILES for mcclane
//app.use('/[route]', express.static('static folder'));

//ROUTES

//REGULAR PAGE SERVING
//our home page, these lines are in every node server
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/html/index.html')
})

app.get('/css/style.css', function(req, res) {
    res.sendFile(__dirname + '/css/style.css')
})

//put the API/processing code here when you've come up with it
//listen for some requests on like api.tlanews.com (create a new record in route 53) and make sure what is submitted has a paypal thing to go with it. You also need a paypal business account for it to work, so get Mom to help.
app.post('/submit', function(req, res) {
    console.log('Something received')
    console.log('name: '+req.body.name)
    //now do something and return something
    fs.appendFile('received.txt', req.body+'\n', function(err) {
        if(err) throw err
        console.log('added to file')
    })
    res.send('received')
})

//START THE SERVER
app.listen(PORT)
console.log('server running on port: ' + PORT)
