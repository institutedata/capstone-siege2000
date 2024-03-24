"use strict";
const { Op } = require("sequelize");
const Models = require("../models/init-models");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

const getSpecialItems = async (res) => {
  try {
    console.log("Sepcial Items Controller reached");
    const SpecialItems = await Models.SpecialItems.findAll();
    res.json(SpecialItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const fetchLimitedStockWithSpecialItems = async (res) => {
  try {
    console.log("Special Items Controller reached");
    const SpecialItems = await Models.SpecialItems.findAll({
      attributes: ["SpecialItemsID", "SpecialRetail"],
      include: [
        {
          model: Models.Stock,
          attributes: ["StockID", "TradeName", "RealCost", "PLU", "Retail"],
          required: true,
        },
      ],
      where: {
        SpecialID: 114,
      },
    });
    res.json(SpecialItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// // async function fetchLimitedStockWithSpecialItems() {
// //   try {
// //     const result = await Models.Stock.findAll({
// //       attributes: ["TradeName", "RealCost", "PLU"], // Specify fields from Stock
// //       include: [
// //         {
// //           model: Models.SpecialItems,
// //           attributes: ["SpecialItemsID", "SpecialRetail"], // Specify fields from SpecialItems
// //           required: true, // This makes it an INNER JOIN
// //         },
// //       ],
// //     });
// //     res.json(results);
// //   } catch (error) {
// //     console.error("Error fetching data:", error);
// //     throw error;
// //   }
// }

// Call the function to fetch data
// fetchLimitedStockWithSpecialItems()
//   .then((data) => {
//     console.log(JSON.stringify(data, null, 2));
//   })
//   .catch(console.error);

// const fetchSpecialItemsWithStock = async(res) => {
//   const sql = `
//       SELECT
//         [SpecialItems].[SpecialItemsID],
//         [SpecialItems].[SpecialRetail],
//         [Stock].[StockID] AS [Stock.StockID],
//         [Stock].[TradeName] AS [Stock.TradeName],
//         [Stock].[RealCost] AS [Stock.RealCost],
//         [Stock].[PLU] AS [Stock.PLU]
//       FROM [SpecialItems]
//       INNER JOIN [Stock] ON [SpecialItems].[stockid] = [Stock].[stockid]
//       WHERE [SpecialItems].[SpecialID] = '114';
//     `;
//   try {
//     const [results, metadata] = await sequelizeInstance.query(sql, {
//       type: sequelizeInstance.QueryTypes.SELECT,
//     });
//     return res.json(results);
//   } catch (error) {
//     console.error("Error executing raw SQL:", error);
//     throw error;
//   }
// }

// Call the function and log the results
// fetchSpecialItemsWithStock()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(console.error);

module.exports = {
  getSpecialItems,
  fetchLimitedStockWithSpecialItems,
};
