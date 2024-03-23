const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Invoice', {
    InvoiceID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    ClosingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ClosingBalance: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    AccountID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    InvoiceGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    InvoiceDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Invoice',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Invoice$AccountID",
        fields: [
          { name: "AccountID" },
        ]
      },
      {
        name: "Invoice$CacheLookup",
        fields: [
          { name: "InvoiceDateModified" },
          { name: "InvoiceGuid" },
        ]
      },
      {
        name: "Invoice$InvoiceGuid",
        fields: [
          { name: "InvoiceGuid" },
        ]
      },
      {
        name: "Invoice$IvoiceID",
        unique: true,
        fields: [
          { name: "InvoiceID" },
        ]
      },
      {
        name: "Invoice$PrimaryKey",
        unique: true,
        fields: [
          { name: "InvoiceID" },
        ]
      },
    ]
  });
};
