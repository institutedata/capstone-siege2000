const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('History', {
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
    HISTORYID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    HISTORYGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    HISTORYDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HisPackSize: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
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
    tableName: 'History',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "HISTORY$CacheLookup",
        fields: [
          { name: "HISTORYDateModified" },
          { name: "HISTORYGuid" },
        ]
      },
      {
        name: "History$CardID",
        fields: [
          { name: "StockID" },
        ]
      },
      {
        name: "HISTORY$HISTORYGuid",
        fields: [
          { name: "HISTORYGuid" },
        ]
      },
      {
        name: "History$Month",
        fields: [
          { name: "Month" },
        ]
      },
      {
        name: "History$PrimaryKey",
        unique: true,
        fields: [
          { name: "StockID" },
          { name: "Month" },
        ]
      },
    ]
  });
};
