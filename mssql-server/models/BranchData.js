const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BranchData', {
    BranchID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'Branch',
        key: 'BranchID'
      }
    },
    StockID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'Stock',
        key: 'StockID'
      }
    },
    BranchExportDateID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'BranchExportDate',
        key: 'BranchExportDateID'
      }
    },
    SOH: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    MTD: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    Expected: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    SOO: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    OriginalScripts: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    RepeatScripts: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Shrinkage: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    DailySales: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    GrossProfit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    RCGrossProfit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    RXGrossProfit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    RXRCGrossProfit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    RXDailySalesPatient: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    RXDailySalesGovt: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    StockListCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    StockRealCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DollarSales: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    OrderRealCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    OrderListCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    OrderQtyDelivered: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    POSGP: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    POSRCGP: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    POSDailySales: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    BranchDataID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    BranchDataGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    BranchDataDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    POSDollarSales: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PhonedScripts: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    StockOwing: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    DeletedScripts: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    OwingDispensed: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    POSTax: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    RXTax: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    RXListCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    RXRealCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    POSListCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    POSRealCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    StockRetail: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    BranchDataType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'BranchData',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "BranchData$BranchDataGuid",
        fields: [
          { name: "BranchDataGuid" },
        ]
      },
      {
        name: "BranchData$BranchID",
        fields: [
          { name: "BranchID" },
        ]
      },
      {
        name: "BranchData$CacheLookup",
        fields: [
          { name: "BranchDataDateModified" },
          { name: "BranchDataGuid" },
        ]
      },
      {
        name: "BranchData$DataLookup",
        unique: true,
        fields: [
          { name: "BranchID" },
          { name: "BranchExportDateID" },
          { name: "StockID" },
        ]
      },
      {
        name: "BranchData$ExportDateID",
        fields: [
          { name: "BranchExportDateID" },
        ]
      },
      {
        name: "BranchData$PrimaryKey",
        unique: true,
        fields: [
          { name: "BranchDataID" },
        ]
      },
      {
        name: "BranchData$StockID",
        fields: [
          { name: "StockID" },
        ]
      },
    ]
  });
};
