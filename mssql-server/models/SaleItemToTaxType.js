const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SaleItemToTaxType', {
    SaleItemToTaxTypeID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sittSaleItemID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'SaleItem',
        key: 'SaleItemID'
      }
    },
    sittTaxTypeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    sittTaxValue: {
      type: DataTypes.REAL,
      allowNull: false,
      defaultValue: 0
    },
    SaleItemToTaxTypeGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SaleItemToTaxTypeDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sittTaxInCents: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'SaleItemToTaxType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SaleItemToTaxType",
        unique: true,
        fields: [
          { name: "SaleItemToTaxTypeID" },
        ]
      },
      {
        name: "SaleItemToTaxType$CacheLookup",
        fields: [
          { name: "SaleItemToTaxTypeDateModified" },
          { name: "SaleItemToTaxTypeGuid" },
        ]
      },
      {
        name: "SaleItemToTaxType$SaleItemToTaxTypeGuid",
        fields: [
          { name: "SaleItemToTaxTypeGuid" },
        ]
      },
    ]
  });
};
