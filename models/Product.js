const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = mongoose.Schema({
  _id: Schema.Types.ObjectId,
  about: String,
  image: String,
  name: String,
  price: Number,
});

module.exports = mongoose.model("Product", productSchema);
