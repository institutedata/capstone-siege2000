"use strict";
const { Op } = require("sequelize");
const Models = require("../models/init-models");

const getStock = async (res) => {
  try {
    const stock = await Models.Stock.findAll({
      where: {
        tradename: {
          [Op.like]: "%go",
        },
      },
    });
    res.json(stock);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const searchStock = async ({ plu, tradeName }) => {
  const query = {
    where: {},
  };

  // Construct query conditions based on provided search parameters
  const searchConditions = [];

  if (plu) {
    searchConditions.push({ PLU: plu });
  }

  if (tradeName) {
    searchConditions.push({
      TradeName: {
        [Op.like]: `${tradeName}%`,
      },
    });
  }

  if (searchConditions.length) {
    query.where = {
      [Op.or]: searchConditions,
      [Op.and]: { StockType: 0 },
    };
  }
  query.attributes = [
    "StockID",
    "PLU",
    "TradeName",
    "PLU",
    "RealCost",
    "Retail",
  ];

  return Models.Stock.findAll(query);
};

module.exports = {
  getStock,
  searchStock,
};
