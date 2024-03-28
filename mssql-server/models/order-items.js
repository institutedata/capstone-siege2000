const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class OrderItems extends Model {}

OrderItems.init(
  {
    OrderItemsID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    stockID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    oiDateDelivered: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    QtyDelivered: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    Quantity: {
      //refers to the Quantity Ordered
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    oiRealCost: {
      //in cents - yay!
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    oiRetail: {
      //in cents - yay!
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "OrderItems",
    tableName: "orderitems",
    timestamps: false,
  }
);
module.exports = OrderItems;
