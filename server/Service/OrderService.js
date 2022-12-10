const orders = require("../Model/Order");
const product = require("../Service/ProductService");

module.exports = class OrderService {
  static async insertOrder(order) {
    var returnValue = await orders.insertMany(order);
    if (
      Object.keys(order).length ==
      Object.keys(returnValue[0]._doc).length - 2
    ) {
      return returnValue[0]._doc;
    } else {
      return null;
    }
  }
};
