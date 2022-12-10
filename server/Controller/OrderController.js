const express = require("express");
const OrderService = require("../Service/OrderService");
const ProductService = require("../Service/ProductService");
const router = express.Router();

router.route("/create").post(async (request, response) => {
  var result = await OrderService.insertOrder(request.body.params);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

module.exports = router;
