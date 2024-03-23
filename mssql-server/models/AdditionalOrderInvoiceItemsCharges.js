const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AdditionalOrderInvoiceItemsCharges', {
    AdditionalOrderInvoiceItemsChargesID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    aicOrderInvoiceID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    aicStockID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    TotalChargeForStockCard: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AdditionalOrderInvoiceItemsChargesGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    AdditionalOrderInvoiceItemsChargesDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    aicAdditionalInvoiceChargeTypesID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    aicOrderItemsID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'AdditionalOrderInvoiceItemsCharges',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "AdditionalInvoiceCharges$AdditionalInvoiceChargesGuid",
        fields: [
          { name: "AdditionalOrderInvoiceItemsChargesGuid" },
        ]
      },
      {
        name: "AdditionalInvoiceCharges$CacheLookup",
        fields: [
          { name: "AdditionalOrderInvoiceItemsChargesDateModified" },
          { name: "AdditionalOrderInvoiceItemsChargesGuid" },
        ]
      },
      {
        name: "PK_AdditionalOrderInvoiceItemsCharges",
        unique: true,
        fields: [
          { name: "AdditionalOrderInvoiceItemsChargesID" },
        ]
      },
    ]
  });
};
