"use strict";
const { Op } = require("sequelize");
const Models = require("../models/init-models");
const sequelize = require("sequelize");

const getSpecials = async (res) => {
  // Old Code - delete when finished testing new code.
  // try {
  //   const Specials = await Models.Specials.findAll({
  //     where: {
  //       activespecial: {
  //         [Op.eq]: 1,
  //       },
  //     },
  //   });
  //   res.json(Specials);
  // } catch (error) {
  //   res.status(500).json({ error: error.message });
  // }

  try {
    //const specialId = req.params.specialId;
    const specials = await Models.SpecialItems.findAll({
      include: [
        {
          model: Models.Stock,
          required: true,
          attributes: ["plu", "TradeName", "Retail", "RealCost"],
        },
        {
          model: Models.Specials,
          required: true,
          where: { ActiveSpecial: 1 },
          attributes: ["SpecialID", "FinishDate", "SpecialName"],
        },
      ],
      where: { siDeleted: 0 },
      attributes: [
        ["SpecialRetail", "SpecialPrice"],
        "Discount",
        "MultiBuyText",
        ["SPECIALITEMSDateModified", "DateModified"],
      ],
      order: [[sequelize.col("SPECIALITEMSDateModified"), "ASC"]],
    });
    res.json(specials);
  } catch (error) {
    console.error("Error fetching specials:", error);
    res.status(500).send("Server error");
  }
};

module.exports = {
  getSpecials,
};
