const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BranchSalesData', {
    BranchSalesDataID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    BranchID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    BranchExportDateID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    AvgSale: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    ItemsPerTransaction: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    NoOfSales: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    BranchSalesDataGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    BranchSalesDataDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NoOfCustomers: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'BranchSalesData',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "BranchSalesData$BranchExportDateID",
        fields: [
          { name: "BranchExportDateID" },
        ]
      },
      {
        name: "BranchSalesData$BranchID",
        fields: [
          { name: "BranchID" },
        ]
      },
      {
        name: "BranchSalesData$BranchSalesDataGuid",
        fields: [
          { name: "BranchSalesDataGuid" },
        ]
      },
      {
        name: "BranchSalesData$BranchSalesDataID",
        fields: [
          { name: "BranchSalesDataID" },
        ]
      },
      {
        name: "BranchSalesData$CacheLookup",
        fields: [
          { name: "BranchSalesDataDateModified" },
          { name: "BranchSalesDataGuid" },
        ]
      },
      {
        name: "BranchSalesData$PrimaryKey",
        unique: true,
        fields: [
          { name: "BranchSalesDataID" },
        ]
      },
    ]
  });
};
