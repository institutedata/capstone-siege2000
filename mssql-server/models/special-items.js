const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class SpecialItems extends Model {}

SpecialItems.init(
  {
    SpecialItemsID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    SpecialID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    StockID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    ActualRetail: {
      type: DataTypes.INTEGER,
      allNull: false,
      defaultValue: 0,
    },
    ActualCost: {
      type: DataTypes.INTEGER,
      allNull: false,
      defaultValue: 0,
    },
    SpecialRetail: {
      type: DataTypes.INTEGER,
      allNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "SpecialItems",
    tableName: "specialitems",
    timestamps: false,
  }
);
module.exports = SpecialItems;
