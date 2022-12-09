const express = require("express");
const OrderService = require("../Service/OrderService");
const ProductService = require("../Service/ProductService");
const router = express.Router();

router.route("/create").post(async (request, response) => {
  var result = await OrderService.insertOrder(request.body.params);
  result.productIds.map(async (product) => {
    const p = await ProductService.getProductById(product.id);
    p.numberOfOrders += product.qty;
    const update = ProductService.update(p);
    if (update == null) {
      return null;
    }
  });
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

router.route("/getOrdersByDate").get(async (request, response) => {
  var result = await OrderService.getOrdersByDate(request.query[0]);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  }
  response.status(403).send();
});

router.route("/getOrdersGroupBy").get(async (request, response) => {
  var result = await OrderService.getOrdersNameGroupBy();
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

router.route("/getOrdersByUser").get(async (request, response) => {
  var result = await OrderService.getOrdersByUser(request.body.params);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  }
  response.status(403).send();
});

router.route("/getOrderById").get(async (request, response) => {
  var result = await OrderService.getOrderById(request.query[0]);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});



router.route("/update").post(async (request, response) => {
  var result = await OrderService.update(request.body.params);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

router.route("/delete").post(async (request, response) => {
  var result = await OrderService.delete(request.body.params);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

module.exports = router;
