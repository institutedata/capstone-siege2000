"use strict";
const { Op } = require("sequelize");
const Models = require("../models/init-models");

const getSpecials = async (res) => {
  try {
    const Specials = await Models.Specials.findAll({
      where: {
        activespecial: {
          [Op.eq]: 1,
        },
      },
    });
    res.json(Specials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getSpecials,
};
