const categories = require("../Model/Category");

module.exports = class CategoryService {
  static async insertCategory(category) {
    return categories
      .insertMany(category)
      .then((value) => {
        return value;
      })
      .catch((error) => {
        return null;
      });
  }

  static async getAllCategories() {
    return categories
      .find({})
      .then((value) => {
        return value;
      })
      .catch((error) => {
        return null;
      });
  }

  static async getCategoryById(id) {
    return categories.findById(id).exec();
  }

  static async getCategoryByName(categoryName) {
    const res = await categories.find({ name: categoryName });
    if (res) {
      return res;
    } else return null;
  }

  static async update(category) {
    const res = await categories.findByIdAndUpdate(category.id, category);
    if (res) {
      return res;
    } else {
      return null;
    }
  }

  static async delete(id) {
    const res = await categories.findByIdAndRemove(id);
    if (res) {
      return res;
    } else {
      return null;
    }
  }
};
