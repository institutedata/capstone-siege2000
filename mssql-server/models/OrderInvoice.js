const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OrderInvoice', {
    InvoiceID: {
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
    InvNumber: {
      type: DataTypes.STRING(200),
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
    CreateDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    StaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    Complete: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    BackOrder: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    OrderInvoiceGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    OrderInvoiceDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OnBackOrder: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    invStockLocationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    InvoiceRealCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    MasterInvoiceID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    OrderFromHeadOffice: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    DeliveredStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    InvoiceValue: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    invDateDelivered: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OrderInvoiceDueDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OrderInvoiceOpen: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    invExchangeRate: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'OrderInvoice',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "OrderInvoice$CacheLookup",
        fields: [
          { name: "OrderInvoiceDateModified" },
          { name: "OrderInvoiceGuid" },
        ]
      },
      {
        name: "OrderInvoice$Complete",
        fields: [
          { name: "Complete" },
        ]
      },
      {
        name: "OrderInvoice$InvNumber",
        fields: [
          { name: "InvNumber" },
        ]
      },
      {
        name: "OrderInvoice$InvoiceID",
        unique: true,
        fields: [
          { name: "InvoiceID" },
        ]
      },
      {
        name: "OrderInvoice$OrderID",
        fields: [
          { name: "OrderID" },
        ]
      },
      {
        name: "OrderInvoice$OrderInvoiceGuid",
        fields: [
          { name: "OrderInvoiceGuid" },
        ]
      },
      {
        name: "OrderInvoice$PrimaryKey",
        unique: true,
        fields: [
          { name: "InvoiceID" },
        ]
      },
      {
        name: "OrderInvoice$StaffID",
        fields: [
          { name: "StaffID" },
        ]
      },
      {
        name: "OrderInvoice$SupplierID",
        fields: [
          { name: "SupplierID" },
        ]
      },
    ]
  });
};
