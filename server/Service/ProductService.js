const products = require("../Model/Product");

module.exports = class ProductService {
  static async getAllProducts() {
    return products
      .find({})
      .then((value) => {
        return value;
      })
      .catch((error) => {
        return null;
      });
  }
};
