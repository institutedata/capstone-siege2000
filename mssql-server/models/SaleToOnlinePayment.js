const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SaleToOnlinePayment', {
    SaleToOnlinePaymentID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SaleToOnlinePaymentDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SaleToOnlinePaymentGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    sopSaleID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Sales',
        key: 'SaleID'
      }
    },
    sopStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    SystemToSendTo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SaleToOnlineStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SaleToOnlinePaymentCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AmountCharged: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    AmountPaid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    OnlineInvoiceNumber: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PaymentURL: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SaleToOnlinePayment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SaleToOnlinePayment$PrimaryKey",
        unique: true,
        fields: [
          { name: "SaleToOnlinePaymentID" },
        ]
      },
    ]
  });
};
