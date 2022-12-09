const mongoose = require("mongoose");

const locationsSchema = new mongoose.Schema({
  shop_name: String,
  latitude: Number,
  longtitude: Number,
});

const locations = mongoose.model("Locations", locationsSchema);

module.exports = locations;
