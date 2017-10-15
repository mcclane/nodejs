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

//order processing, add to file, maybe I should send an email to myself
app.post('/submit', function(req, res) {
    console.log('Something received')
    console.log('name: '+req.body.name)
    var csvString = req.body.name+","+req.body.email+","+req.body.phone+","+req.body.addressLine1+","+req.body.addressLine2+","+req.body.zip+","+req.body.city+","+req.body.state+","+req.body.country+","+req.body.cc_number+","+req.body.cc_cvv+","+req.body.cc_month+","+req.body.cc_year+"\n"
    console.log(csvString)
    //now do something and return something
    fs.appendFile('orders/received.txt', csvString, function(err) {
        if(err) throw err
        console.log('added to file')
    })
    res.send('received')
})

//START THE SERVER
app.listen(PORT)
console.log('server running on port: ' + PORT)
