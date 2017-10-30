const mongoose = require('mongoose');
const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/shoeApi";

mongoose.connect(mongoURL, {
    useMongoClient: true
}, function(error) {

});

module.exports = function() {
    const apiSchema = mongoose.Schema({
        color: String,
        brand: String,
        price: Number,
        size: Number,
        in_stock: Number
    })

    const apiData = mongoose.model("shoeApi", apiSchema)

    return {
        apiData
    }
}
