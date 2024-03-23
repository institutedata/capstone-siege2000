const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StockToTaxType', {
    StockToTaxTypeID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sttStockID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'Stock',
        key: 'StockID'
      }
    },
    sttTaxTypeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    sttTaxValue: {
      type: DataTypes.REAL,
      allowNull: false,
      defaultValue: 0
    },
    sttUseProductGroupTax: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    StockToTaxTypeGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    StockToTaxTypeDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sttTaxModifierID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    sttStartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sttEndDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'StockToTaxType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_StockToTaxType",
        unique: true,
        fields: [
          { name: "StockToTaxTypeID" },
        ]
      },
      {
        name: "StockToTaxType$CacheLookup",
        fields: [
          { name: "StockToTaxTypeDateModified" },
          { name: "StockToTaxTypeGuid" },
        ]
      },
      {
        name: "StockToTaxType$StockToTaxTypeGuid",
        fields: [
          { name: "StockToTaxTypeGuid" },
        ]
      },
    ]
  });
};
