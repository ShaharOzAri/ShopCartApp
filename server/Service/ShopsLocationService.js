const shopsLocation = require("../Model/ShopsLocation");

module.exports = class ShopsLocationService {
  static async insertLocation(location) {
    shopsLocation
      .insertMany(location)
      .then((value) => {})
      .catch((error) => {});
  }

  static async getAllLocations() {
    return shopsLocation
      .find({})
      .then((value) => {
        return value;
      })
      .catch((error) => {
        return null;
      });
  }
};
