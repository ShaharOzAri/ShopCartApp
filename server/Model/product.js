const mongoose = require("mongoose");
const SchemaTypes = mongoose.Schema.Types;

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  images: { type: Array, required: true },
  material: { type: String, required: true },
  type: String,
  category: String,
  numberOfOrders: Number,
});

const products = mongoose.model("Products", ProductSchema);

module.exports = products;
