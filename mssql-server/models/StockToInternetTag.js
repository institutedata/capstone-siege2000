const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StockToInternetTag', {
    StockToInternetTagID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    stiStockID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Stock',
        key: 'StockID'
      }
    },
    stiInternetTagID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'InternetTag',
        key: 'InternetTagID'
      }
    },
    stiDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    StockToInternetTagGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    StockToInternetTagDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'StockToInternetTag',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_StockToInternetTag",
        unique: true,
        fields: [
          { name: "StockToInternetTagID" },
        ]
      },
      {
        name: "StockToInternetTag$CacheLookup",
        fields: [
          { name: "StockToInternetTagDateModified" },
          { name: "StockToInternetTagGuid" },
        ]
      },
      {
        name: "StockToInternetTag$stiInternetTagID",
        fields: [
          { name: "stiInternetTagID" },
        ]
      },
      {
        name: "StockToInternetTag$stiStockID",
        fields: [
          { name: "stiStockID" },
        ]
      },
      {
        name: "StockToInternetTag$StockToInternetTagGuid",
        fields: [
          { name: "StockToInternetTagGuid" },
        ]
      },
    ]
  });
};
