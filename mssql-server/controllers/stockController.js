"use strict";
const { Op } = require("sequelize");
const Models = require("../models/init-models");

const getStock = async (res) => {
  try {
    const stock = await Models.Stock.findAll({
      attributes: [
        "StockID",
        "PLU",
        "TradeName",
        "RealCost",
        "Retail",
        "SOH",
        "MTD",
        "PackSize",
      ],
    });
    res.json(stock);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const searchStock = async ({ plu, tradeName, stockID }) => {
  const query = {
    where: {},
  };

  // Construct query conditions based on provided search parameters
  const searchConditions = [];

  if (plu) {
    searchConditions.push({ PLU: plu });
  }
  if (stockID) {
    searchConditions.push({ StockID: Number(stockID) });
  }

  if (tradeName) {
    searchConditions.push({
      TradeName: {
        [Op.like]: `${tradeName}%`,
      },
    });
  }

  // console.log({ plu, tradeName, stockID });
  if (searchConditions.length) {
    query.where = {
      [Op.or]: searchConditions,
    };
  }
  query.order = ["TradeName"];
  query.attributes = [
    "StockID",
    "PLU",
    "TradeName",
    "PLU",
    "RealCost",
    "Retail",
    "SOH",
    "MTD",
    "PackSize",
  ];

  return Models.Stock.findAll(query);
};
const updateStock = (req, res) => {
  console.log(`Request Body: ${JSON.stringify(req.body)}`);
  Models.Stock.update(req.body, { where: { StockID: req.params.StockID } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  getStock,
  searchStock,
  updateStock,
};
