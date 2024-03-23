const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StockTakeItems', {
    StockTakeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'StockTake',
        key: 'StockTakeID'
      }
    },
    StockID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Stock',
        key: 'StockID'
      }
    },
    StockTakeItemsID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    StockTakeItemsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    StockTakeItemsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    stkStocKBatchID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'StockTakeItems',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_StockTakeItems",
        unique: true,
        fields: [
          { name: "StockTakeItemsID" },
        ]
      },
      {
        name: "StockTakeItems$CacheLookup",
        fields: [
          { name: "StockTakeItemsDateModified" },
          { name: "StockTakeItemsGuid" },
        ]
      },
      {
        name: "StockTakeItems$StockTakeID",
        fields: [
          { name: "StockTakeID" },
        ]
      },
      {
        name: "StockTakeItems$StockTakeItemsGuid",
        fields: [
          { name: "StockTakeItemsGuid" },
        ]
      },
    ]
  });
};
