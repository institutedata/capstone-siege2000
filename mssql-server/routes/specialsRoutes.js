const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/index");

router.get("/", (req, res) => {
  console.log("Special request rexeived");
  Controllers.specialsController.getSpecials(res);
});

module.exports = router;
