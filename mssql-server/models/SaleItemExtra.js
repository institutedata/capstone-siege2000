const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SaleItemExtra', {
    SaleItemID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    SerialNumber: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    OTC: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    RM: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    StaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    EPayTxnRef: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    EPayCardNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EPayAdditionalInfo: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    EPayReceiptText: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SaleItemExtraGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SaleItemExtraDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SaleItemExtra',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SaleItemExtra$CacheLookup",
        fields: [
          { name: "SaleItemExtraDateModified" },
          { name: "SaleItemExtraGuid" },
        ]
      },
      {
        name: "SaleItemExtra$OTC",
        fields: [
          { name: "OTC" },
        ]
      },
      {
        name: "SaleItemExtra$PrimaryKey",
        unique: true,
        fields: [
          { name: "SaleItemID" },
        ]
      },
      {
        name: "SaleItemExtra$RM",
        fields: [
          { name: "RM" },
        ]
      },
      {
        name: "SaleItemExtra$SaleItemExtraGuid",
        fields: [
          { name: "SaleItemExtraGuid" },
        ]
      },
      {
        name: "SaleItemExtra$SaleItemID",
        fields: [
          { name: "SaleItemID" },
        ]
      },
      {
        name: "SaleItemExtra$StaffID",
        fields: [
          { name: "StaffID" },
        ]
      },
    ]
  });
};
