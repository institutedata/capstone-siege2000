const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Stock extends Model {}

Stock.init(
  {
    StockID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true, // Assuming StockID is auto-incremented
    },
    TradeName: {
      type: DataTypes.STRING(40), // Adjust the length as per your requirement
      allowNull: false,
      defaultValue: "New Card", // Default value as defined in your table
    },
    ProductGroupID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0, // Assuming a default value of 0 as per your table
    },
    ProductClassID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0, // Assuming a default value of 0 as per your table
    },
    RealCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0, // Assuming a default value of 0 as per your table
    },
    Retail: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0, // Assuming a default value of 0 as per your table
    },
    SOH: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0, // Assuming a default value of 0 as per your table
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "Stock",
    tableName: "Stock", // Explicitly specifying the table name
    timestamps: false, // Assuming you are not using Sequelize's automatic timestamp columns
  }
);

module.exports = Stock;
