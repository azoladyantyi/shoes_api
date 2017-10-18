const mongoose = require('mongoose');

const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/shoesApi";

mongoose.connect(mongoURL, {
  useMongoClient: true
},function(error) {

});

module.exports = function () {
  const shoeSchema = mongoose.Schema({
    name: String
  })
  shoeSchema.index({name: 1}, {unique: true})
  const shoeData = mongoose.model("shoeData", shoeSchema)

  return {
    shoeData
  }
}
