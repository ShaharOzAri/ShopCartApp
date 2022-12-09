const express = require("express");
const UserService = require("../Service/UserService");
const router = express.Router();

router.route("/signup").post(async (request, response) => {
  var result = await UserService.insertUser(request.body.params);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send({});
  }
});

router.route("/signin").post(async (request, response) => {
  var result = await UserService.getUserByEmail(request.body.params.email);
  if (result != null) {
    if (result[0].password == request.body.params.password) {
      response.status(200).send({
        msg: result,
      });
    }
  }
  response.status(403).send();
});

router.route("/getAll").get(async (request, response) => {
  var result = await UserService.getAllUsers();
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

router.route("/getUserById").get(async (request, response) => {
  var result = await UserService.getUserById(request.query.id);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

router.route("/update").post(async (request, response) => {
  var result = await UserService.update(request.body.params);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

router.route("/delete").post(async (request, response) => {
  var result = await UserService.delete(request.body.params);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

module.exports = router;
