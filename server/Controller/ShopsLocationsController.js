const express = require("express");
const ShopsLocationService = require("../Service/ShopsLocationService");
const router = express.Router();
const shopsLocation = require("../Model/ShopsLocation");

router.route("/createlocation").post((request, response) => {
  var location = request.body.params;
  ShopsLocationService.insertLocation(location);
});

router.route("/getLocations").get(async (req, response) => {
  var result = await ShopsLocationService.getAllLocations();
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

module.exports = router;
