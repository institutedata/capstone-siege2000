"use strict";
const { Op } = require("sequelize");
const Models = require("../models/init-models");
const moment = require("moment");

// Search for order items for a stock card over the last 12 months
const searchOrderItems = async (stockID) => {
  // Get today's date and work back 12 months.
  const today = moment();
  const twelveMonthsAgo = moment().subtract(12, "months");

  const searchConditions = [];

  // Check if there is a stock id
  if (stockID) {
    searchConditions.push({ stockID: Number(stockID) });
  }

  const query = {
    where: {},
  };

  // Construct the query conditionally based on whether stockID is provided
  if (searchConditions.length) {
    query.where = {
      [Op.and]: [
        { [Op.or]: searchConditions },
        {
          oiDateDelivered: {
            [Op.between]: [twelveMonthsAgo.toDate(), today.toDate()],
          },
        },
      ],
    };
    query.order = [["oiDateDelivered", "ASC"]];
    query.attributes = [
      "stockID",
      "oiDateDelivered",
      "QtyDelivered",
      "Quantity",
      "oiRealCost",
      "oiRetail",
    ];
  }

  // Execute the query to find all matching order items
  try {
    const orderItems = await Models.OrderItems.findAll(query);
    return orderItems;
  } catch (error) {
    console.error("Error searching order items:", error);
    throw error; // Or handle error as needed
  }
};

module.exports = {
  searchOrderItems,
};
