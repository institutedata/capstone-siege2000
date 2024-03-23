const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OrderItemBatch', {
    OrderItemBatchID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    oibOrderItemID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    oibStockBatchID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    QuantityUsed: {
      type: DataTypes.REAL,
      allowNull: false,
      defaultValue: 0
    },
    OrderItemBatchDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OrderItemBatchGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    HasExpiredComponent: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    IsSubBatch: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    oibDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'OrderItemBatch',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "OrderItemBatch$CacheLookup",
        fields: [
          { name: "OrderItemBatchDateModified" },
          { name: "OrderItemBatchGuid" },
        ]
      },
      {
        name: "OrderItemBatch$OrderItemID",
        fields: [
          { name: "oibOrderItemID" },
        ]
      },
      {
        name: "OrderItemBatch$StockBatchID",
        fields: [
          { name: "oibStockBatchID" },
        ]
      },
      {
        name: "PK_OrderItemBatch",
        unique: true,
        fields: [
          { name: "OrderItemBatchID" },
        ]
      },
    ]
  });
};
