const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MultiHistory', {
    StockID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      references: {
        model: 'Stock',
        key: 'StockID'
      }
    },
    mhStockLocationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Month: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    QtySold: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    ValueSold: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    TotalTax: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    TotalCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    HisSOH: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    HisListCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    HisRealCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    MultiHistoryGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    MultiHistoryDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MultiHistoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    HISBestRule: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    HISExpected: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    TotalRealCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'MultiHistory',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "MultiHistory$CacheLookup",
        fields: [
          { name: "MultiHistoryDateModified" },
          { name: "MultiHistoryGuid" },
        ]
      },
      {
        name: "MultiHistory$CardID",
        fields: [
          { name: "StockID" },
        ]
      },
      {
        name: "MultiHistory$mhStockLocationID",
        fields: [
          { name: "mhStockLocationID" },
        ]
      },
      {
        name: "MultiHistory$Month",
        fields: [
          { name: "Month" },
        ]
      },
      {
        name: "MultiHistory$MultiHistoryGuid",
        fields: [
          { name: "MultiHistoryGuid" },
        ]
      },
      {
        name: "MultiHistory$PrimaryKey",
        unique: true,
        fields: [
          { name: "StockID" },
          { name: "mhStockLocationID" },
          { name: "Month" },
        ]
      },
    ]
  });
};
