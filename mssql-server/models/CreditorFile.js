const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CreditorFile', {
    CreditorID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Orders',
        key: 'OrderID'
      }
    },
    Description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TotalCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    TotalGSTPaid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SupplierID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Supplier',
        key: 'SupplierID'
      }
    },
    SupplierName: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Reference: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CreditorFileGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    CreditorFileDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cfSentToXero: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    cfStockTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: -1
    },
    cfstockLocationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    cfInvoiceID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    XeroGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    cfPaymentMade: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'CreditorFile',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "CreditorFile$CacheLookup",
        fields: [
          { name: "CreditorFileDateModified" },
          { name: "CreditorFileGuid" },
        ]
      },
      {
        name: "CreditorFile$CreditorFileGuid",
        fields: [
          { name: "CreditorFileGuid" },
        ]
      },
      {
        name: "CreditorFile$OrderID",
        fields: [
          { name: "OrderID" },
        ]
      },
      {
        name: "CreditorFile$PrimaryKey",
        unique: true,
        fields: [
          { name: "CreditorID" },
        ]
      },
      {
        name: "CreditorFile$SupplierID",
        fields: [
          { name: "SupplierID" },
        ]
      },
      {
        name: "CreditorFile$TotalGSTPaid",
        fields: [
          { name: "TotalGSTPaid" },
        ]
      },
    ]
  });
};
