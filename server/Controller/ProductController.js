const express = require("express");
const ProductService = require("../Service/ProductService");
const router = express.Router();

router.route("/getAll").get(async (request, response) => {
  var result = await ProductService.getAllProducts();
  console.log(result);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

module.exports = router;
