const express = require('express');
const exphbs = require("express-handlebars");
const form = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/shoesApi";
const Models = require("./models");
const models = Models(mongoURL);

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());

app.use(session({
    secret: 'keyboard cat',
    cookie: {
        maxAge: 60000 * 30
    }
}));
app.use(flash());

// setting rendering engine
app.engine("handlebars", exphbs({
    defaultLayout: "main",
    extname: "handlebars"
}));
app.use(express.static("public"));
app.use(express.static("views"))
app.use(form.urlencoded({
    extended: true
}));
app.set("view engine", "handlebars")

// GET method route for api
app.get('/api/shoes', function(req, res) {
    res.send('')
})
// GET method route for brandname
app.get('/api/shoes/brand/:brandname', function(req, res) {
    res.send('')
})
// GET method route for size
app.get('/api/shoes/size/:size', function(req, res) {
    res.send('')
})
// GET method route for brandname sizes
app.get('	/api/shoes/brand/:brandname/size/:size', function(req, res) {
    res.send('')
})

// POST method route for id
app.post('/api/shoes/sold/:id', function(req, res) {
    res.send('')
})

// POST method route for api
app.post('/api/shoes', function(req, res) {
    res.send('')
})
app.set('port', (process.env.PORT || 5000));

app.use(function(err, req, res, next) {
    res.status(500).send(err.stack)
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port' + app.get('port'));

});
