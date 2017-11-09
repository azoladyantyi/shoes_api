const express = require('express');
const exphbs = require("express-handlebars");
const bodyParser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');
const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/shoeApi";
const Models = require("./models");
const models = Models(mongoURL);


var app = express();
app.use(bodyParser.json());
app.use(session({
    secret: 'keyboard cat',
    cookie: {
        maxAge: 60000 * 30
    }
}));
app.use(flash());

//set up the engine
app.engine("handlebars", exphbs({
    defaultLayout: "main",
    extname: "handlebars"
}));
app.use(express.static("public"));
app.use(express.static("views"))
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("view engine", "handlebars")


// GET route for all shoes
app.get('/api/shoes', function(req, res) {
    models.apiData.find({}, function(err, results) {
        if (err) {
            console.log(err);
        } else {
          console.log(results);
            res.json({data:results})

        }
    })

})

// GET route for all shoes brands
app.get('/api/shoes/brand/:brandname', function(req, res) {
    var Brand = req.params.brandname;
    models.apiData.find({
        brand: Brand
    }, function(err, results) {
        if (err) {
            console.log(err);
        } else {
            res.json(results)
        }
    })

})

// GET route for all shoes sizes
app.get('/api/shoes/size/:size', function(req, res) {
    var Size = req.params.size;
    models.apiData.find({
        size: Size
    }, function(err, results) {
        if (err) {
            console.log(err);
        } else {
            res.json(results)
        }
    })
})
// GET  route for all shoes given sizes
app.get('/api/shoes/brand/:brandname/size/:size', function(req, res) {
    var Brand = req.params.brandname;
    var Size = req.params.size;
    models.apiData.find({
        brand: Brand,
        size: Size
    }, function(err, results) {
        if (err) {
            console.log(err);
        } else {
            res.json(results)
        }
    })
})
// POST route updated stock
app.post('/api/shoes/sold/:id', function(req, res) {
  var id = req.params.id;
  models.apiData.findOne({
      _id: id
  }, function (err, results) {}).then(function (results) {
    if(results.In_stock <= 1){
    results.remove();
       res.json({
         results: 'wertyuiop'
       });
  }
  else{
    models.apiData.findOneAndUpdate({
            _id: id
        },

        {
            $inc: {
                in_stock: -1
            }
        }, {
            upsert: false
        },
        function(err, results) {
            if (err) {
                console.log(err);
            } else {
                res.json(results);
            }
        })
      }
})
});
// POST  route to add a new shoe
app.post('/api/shoes', function(req, res) {
    var Color = req.body.color;
    var Brand = req.body.brand;
    var Price = req.body.price;
    var Size = req.body.size;
    var In_stock = req.body.in_stock;
    models.apiData.create({
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
            // console.log(results);
        }



    })

})


port = process.env.PORT || 3000;

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
