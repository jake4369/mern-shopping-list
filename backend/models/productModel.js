const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product: {
    type: String,
    required: [true, "A product must have a name"],
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
