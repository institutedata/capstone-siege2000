const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StockShelfLocation', {
    StockShelfLocationID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sslShelfLocationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ShelfLocation',
        key: 'ShelfLocationID'
      }
    },
    sslStockID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Stock',
        key: 'StockID'
      }
    },
    StockShelfLocationGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    StockShelfLocationDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'StockShelfLocation',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_StockShelfLocation",
        unique: true,
        fields: [
          { name: "StockShelfLocationID" },
        ]
      },
      {
        name: "StockShelfLocation$CacheLookup",
        fields: [
          { name: "StockShelfLocationDateModified" },
          { name: "StockShelfLocationGuid" },
        ]
      },
      {
        name: "StockShelfLocation$StockShelfLocation",
        unique: true,
        fields: [
          { name: "sslShelfLocationID" },
          { name: "sslStockID" },
        ]
      },
      {
        name: "StockShelfLocation$StockShelfLocationGuid",
        fields: [
          { name: "StockShelfLocationGuid" },
        ]
      },
    ]
  });
};
