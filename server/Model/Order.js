const mongoose = require("mongoose");
const SchemaTypes = mongoose.Schema.Types;

const OrderSchema = new mongoose.Schema({
  date: Date,
  productIds: Array,
  totalSum: Number,
  userEmail: {type: String},
  address: String,
});

const orders = mongoose.model("Orders", OrderSchema);

module.exports = orders;
