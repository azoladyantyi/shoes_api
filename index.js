const express = require('express');
const exphbs = require("express-handlebars");
const form = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/shoeApi";
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
app = express(),


    // GET route for all shoes
    app.get('/api/shoes', function(req, res) {
        apiData.models.find({}, function(err, results) {
            if (err) {
                console.log(err);
            } else {
                res.json(results)
            }
        })

    })

// GET route for all shoes brands
app.get('/api/shoes/brand/:brandname', function(req, res) {

})

// GET route for all shoes sizes
app.get('/api/shoes/size/:size', function(req, res) {
    res.send('')
})
// GET  route for all shoes given sizes
app.get('/api/shoes/brand/:brandname/size/:size', function(req, res) {
    res.send('')
})
// POST route updated stock
app.post('/api/shoes/sold/:id', function(req, res) {
    res.send('')
})
// POST  route to add a new shoe
app.post('/api/shoes', function(req, res) {
    var Color = req.body.color;
    var Brand = req.body.brand;
    var Price = req.body.price;
    var Size = req.body.size;
    var In_stock = req.body.in_stock;
    apiData.models.create({
            color: Color,
            brand: Brand,
            price: Price,
            size: Size,
            in_stock: In_stock
        }, function(err, results) {
            if (err) {
                console.log(err);
            } else {
                res.json(results)
                //console.log(results);
            }



    })



})
port = process.env.PORT || 3000;

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
