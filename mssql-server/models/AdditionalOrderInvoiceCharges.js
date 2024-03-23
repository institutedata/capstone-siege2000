const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AdditionalOrderInvoiceCharges', {
    AdditionalOrderInvoiceChargesID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    aoicOrderInvoiceID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    TotalChargeForOrderInvoice: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AdditionalOrderInvoiceChargesGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    AdditionalOrderInvoiceChargesDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    aoicAdditionalInvoiceChargeTypesID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AdditionalOrderInvoiceCharges',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "AdditionalInvoiceCharges$AdditionalInvoiceChargesGuid",
        fields: [
          { name: "AdditionalOrderInvoiceChargesGuid" },
        ]
      },
      {
        name: "AdditionalInvoiceCharges$CacheLookup",
        fields: [
          { name: "AdditionalOrderInvoiceChargesDateModified" },
          { name: "AdditionalOrderInvoiceChargesGuid" },
        ]
      },
      {
        name: "PK_AdditionalOrderInvoiceCharges",
        unique: true,
        fields: [
          { name: "AdditionalOrderInvoiceChargesID" },
        ]
      },
    ]
  });
};
