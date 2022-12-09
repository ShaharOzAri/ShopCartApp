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

  static async getOrdersByDate(selectedDate) {
    var date = new Date(selectedDate);
    let start = new Date(selectedDate);

    let end = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + 1,
      2,
      59,
      59
    );
    var res = await orders.find({
      date: { $gte: start, $lte: end },
    });
    if (res) return res;
    else return null;
  }

  static async getOrdersNameGroupBy() {
    return orders.aggregate([
      {
        $group: {
          _id: "$date",
          count: { $sum: 1 },
          profit: { $sum: "$total" },
        },
      },
    ]);
  }

  static async getOrdersByUser(user) {
    return orders
      .find({ userId: user })
      .then((value) => {
        if (value.length == 0) {
          return null;
        }
        return value;
      })
      .catch((error) => {
        return null;
      });
  }

  static async getOrderById(id) {
    var res = await orders.findById(id).exec();
    if (res) {
      return res;
    } else {
      return null;
    }
  }

  static async update(order) {
    const res = await orders.findByIdAndUpdate(order._id, order);
    if (res) {
      return res;
    } else {
      return null;
    }
  }

  static async delete(id) {
    await orders.findByIdAndRemove(id);
    return "ok";
  }
};
