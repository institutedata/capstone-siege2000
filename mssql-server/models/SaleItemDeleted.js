const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SaleItemDeleted', {
    DeleteDate: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    StaffID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    StockID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    AuthorisedStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Quantity: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    Retail: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Value: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Comment: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SALEITEMDELETEDID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    SALEITEMDELETEDGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SALEITEMDELETEDDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sidPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    sidSpecialItemTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'SaleItemDeleted',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SaleItemDeleted$AuthorisedStaffID",
        fields: [
          { name: "AuthorisedStaffID" },
        ]
      },
      {
        name: "SALEITEMDELETED$CacheLookup",
        fields: [
          { name: "SALEITEMDELETEDDateModified" },
          { name: "SALEITEMDELETEDGuid" },
        ]
      },
      {
        name: "SaleItemDeleted$DeleteDate",
        fields: [
          { name: "DeleteDate" },
        ]
      },
      {
        name: "SaleItemDeleted$PrimaryKey",
        unique: true,
        fields: [
          { name: "StockID" },
          { name: "DeleteDate" },
          { name: "StaffID" },
        ]
      },
      {
        name: "SALEITEMDELETED$SALEITEMDELETEDGuid",
        fields: [
          { name: "SALEITEMDELETEDGuid" },
        ]
      },
      {
        name: "SaleItemDeleted$StaffID",
        fields: [
          { name: "StaffID" },
        ]
      },
      {
        name: "SaleItemDeleted$StockID",
        fields: [
          { name: "StockID" },
        ]
      },
    ]
  });
};
