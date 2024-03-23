const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SaleToTaxType', {
    SaleToTaxTypeID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sttSaleID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'Sales',
        key: 'SaleID'
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
    SaleToTaxTypeTypeGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SaleToTaxTypeTypeDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sttTaxInCents: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'SaleToTaxType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SaleToTaxType",
        unique: true,
        fields: [
          { name: "SaleToTaxTypeID" },
        ]
      },
    ]
  });
};
