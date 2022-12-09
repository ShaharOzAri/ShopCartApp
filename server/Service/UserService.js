const users = require("../Model/User");

module.exports = class UserService {
  static async insertUser(user) {
    return users
      .insertMany(user)
      .then((value) => {
        return value;
      })
      .catch((error) => {
        return null;
      });
  }

  static async getUserByEmail(userEmail) {
    return users
      .find({ email: userEmail })
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

  static async getAllUsers() {
    return users
      .find({})
      .then((value) => {
        return value;
      })
      .catch((error) => {
        return null;
      });
  }

  static async getUserById(id) {
    return users.findById(id).exec();
  }

  static async update(user) {
    const res = await users.findByIdAndUpdate(user._id, user);
    if (res) {
      return res;
    } else {
      return null;
    }
  }

  static async delete(id) {
    const res = await users.findByIdAndRemove(id);
    if (res) {
      return res;
    } else {
      return null;
    }
  }
};
