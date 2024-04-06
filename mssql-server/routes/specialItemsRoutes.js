const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/index");

router.get("/", (req, res) => {
  console.log("Special Items request rexeived");
  Controllers.specialItemsController.fetchLimitedStockWithSpecialItems(res);
});

module.exports = router;
