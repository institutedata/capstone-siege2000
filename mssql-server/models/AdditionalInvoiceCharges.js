const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AdditionalInvoiceCharges', {
    AdditionalInvoiceChargesID: {
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
    AdditionalInvoiceChargesGuid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AdditionalInvoiceChargesDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AdditionalInvoiceCharges',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "AdditionalInvoiceCharges$AdditionalInvoiceChargesGuid",
        fields: [
          { name: "AdditionalInvoiceChargesGuid" },
        ]
      },
      {
        name: "AdditionalInvoiceCharges$CacheLookup",
        fields: [
          { name: "AdditionalInvoiceChargesDateModified" },
          { name: "AdditionalInvoiceChargesGuid" },
        ]
      },
      {
        name: "PK_AdditionalInvoiceCharges",
        unique: true,
        fields: [
          { name: "AdditionalInvoiceChargesID" },
        ]
      },
    ]
  });
};
