const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
});

const categories = mongoose.model("categories", CategorySchema);

module.exports = categories;
