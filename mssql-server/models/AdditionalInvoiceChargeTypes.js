const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AdditionalInvoiceChargeTypes', {
    AdditionalInvoiceChargeTypesID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    AdditionalInvoiceChargeTypes: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    aicMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    AdditionalInvoiceChargeTypesGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    AdditionalInvoiceChargeTypesDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    aictMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    aictStockID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Stock',
        key: 'StockID'
      }
    }
  }, {
    sequelize,
    tableName: 'AdditionalInvoiceChargeTypes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "AdditionalInvoiceChargeTypes$AdditionalInvoiceChargeTypes",
        unique: true,
        fields: [
          { name: "AdditionalInvoiceChargeTypes" },
        ]
      },
      {
        name: "AdditionalInvoiceChargeTypes$AdditionalInvoiceChargeTypesGuid",
        fields: [
          { name: "AdditionalInvoiceChargeTypesGuid" },
        ]
      },
      {
        name: "AdditionalInvoiceChargeTypes$CacheLookup",
        fields: [
          { name: "AdditionalInvoiceChargeTypesDateModified" },
          { name: "AdditionalInvoiceChargeTypesGuid" },
        ]
      },
      {
        name: "PK_AdditionalInvoiceChargeTypes",
        unique: true,
        fields: [
          { name: "AdditionalInvoiceChargeTypesID" },
        ]
      },
    ]
  });
};
