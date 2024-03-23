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

module.exports = {
  getStock,
};
