"use strict";
const Stock = require("./Stock"); //require the model
async function init() {
  await Stock.sync(); //sync the model
}
init();
module.exports = {
  Stock, //export the model
};
