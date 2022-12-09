const express = require("express");
const CategoryService = require("../Service/CategoryService");
const router = express.Router();

router.route("/create").post(async (request, response) => {
  var result = await CategoryService.insertCategory(request.body.params);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

router.route("/getAll").get(async (request, response) => {
  var result = await CategoryService.getAllCategories();
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

router.route("/getCategoryById").get(async (request, response) => {
  var result = await CategoryService.getCategoryById(request.body.params);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

router.route("/getCategoryByName").get(async (request, response) => {
  var result = await CategoryService.getCategoryByName(request.query[0]);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

router.route("/update").post(async (request, response) => {
  var result = await CategoryService.update(request.body.params);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

router.route("/delete").post(async (request, response) => {
  var result = await CategoryService.delete(request.body.params);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

module.exports = router;
