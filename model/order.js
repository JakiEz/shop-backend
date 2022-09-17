const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
  name: {
    type: String,
  },
  adress: {
    type: String,
  },
  phone: {
    type: String,
  },
  price: {
    type: String,
  },
  cart : {
    type: String,
  },
  total: {
    type: String,
  },
});
exports.Order = mongoose.model("Order", orderSchema);
