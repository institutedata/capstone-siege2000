const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalePayment', {
    SalePaymentID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SaleID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Value: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    StatementID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    AccountID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    InvoiceID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    GSTContent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PaymentDetails: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    SalePaymentGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SalePaymentDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    spScriptToPrivateInsuranceGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    spForiegnCurrencyValue: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'SalePayment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SalePayment$AccountID",
        fields: [
          { name: "AccountID" },
        ]
      },
      {
        name: "SalePayment$CacheLookup",
        fields: [
          { name: "SalePaymentDateModified" },
          { name: "SalePaymentGuid" },
        ]
      },
      {
        name: "SalePayment$InvoiceID",
        fields: [
          { name: "StatementID" },
        ]
      },
      {
        name: "SalePayment$PrimaryKey",
        unique: true,
        fields: [
          { name: "SalePaymentID" },
        ]
      },
      {
        name: "SalePayment$SaleID",
        fields: [
          { name: "SaleID" },
        ]
      },
      {
        name: "SalePayment$SalePaymentGuid",
        fields: [
          { name: "SalePaymentGuid" },
        ]
      },
      {
        name: "SalePayment$StatementID",
        fields: [
          { name: "StatementID" },
        ]
      },
    ]
  });
};
