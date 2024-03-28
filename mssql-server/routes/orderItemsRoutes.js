const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/index");

const { searchOrderItems } = require("../controllers/orderItemsController");

// Corrected router to get order items by stockID
router.get("/search/:stockID", async (req, res) => {
  try {
    console.log(
      "Order Items request received for stockID: ",
      req.params.stockID
    );
    const { stockID } = req.params;
    // Ensure that stockID is correctly passed to the searchOrderItems function
    const results = await searchOrderItems(stockID); // If stockID is a single parameter
    res.json(results);
  } catch (error) {
    console.error("Search API error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router;
