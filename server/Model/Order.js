const mongoose = require("mongoose");
const SchemaTypes = mongoose.Schema.Types;

const OrderSchema = new mongoose.Schema({
  products: Array,
  totalSum: Number,
  first_name: String,
  last_name: String,
  email: String,
  address: String,
});

const orders = mongoose.model("Orders", OrderSchema);

module.exports = orders;
