const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SaleItemBatch', {
    SaleItemBatchID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sibSaleItemID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'SaleItem',
        key: 'SaleItemID'
      }
    },
    sibStockBatchID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'StockBatch',
        key: 'StockBatchID'
      }
    },
    QuantityUsed: {
      type: DataTypes.REAL,
      allowNull: false,
      defaultValue: 0
    },
    SaleItemBatchDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SaleItemBatchGuid: {
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
    sibDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'SaleItemBatch',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SaleItemBatch",
        unique: true,
        fields: [
          { name: "SaleItemBatchID" },
        ]
      },
      {
        name: "SaleItemBatch$CacheLookup",
        fields: [
          { name: "SaleItemBatchDateModified" },
          { name: "SaleItemBatchGuid" },
        ]
      },
      {
        name: "SaleItemBatch$SaleItemID",
        fields: [
          { name: "sibSaleItemID" },
        ]
      },
      {
        name: "SaleItemBatch$StockBatchID",
        fields: [
          { name: "sibStockBatchID" },
        ]
      },
    ]
  });
};
