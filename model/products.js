const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  detail: {
    type: String,
  },
  image: {
    type: String,
  },
});
exports.Product = mongoose.model("Product", productSchema);
