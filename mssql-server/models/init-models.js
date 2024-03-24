"use strict";
const Stock = require("./Stock"); //require the model
const Specials = require("./specials");
const SpecialItems = require("./special-items");
async function init() {
  await Stock.sync(); //sync the model
  await Specials.sync();
  await SpecialItems.sync();
}
init();

// Assuming each `Stock` can have multiple `SpecialItems`
SpecialItems.belongsTo(Stock, { foreignKey: "stockid" }); // If each SpecialItem is associated with one Stock
Stock.hasMany(SpecialItems, { foreignKey: "stockid" }); // If a Stock can have many SpecialItems

SpecialItems.belongsTo(Specials, { foreignKey: "SpecialID" });
Specials.hasMany(SpecialItems, { foreignKey: "SpecialID" });

module.exports = {
  Stock, //export the model
  Specials,
  SpecialItems,
};
