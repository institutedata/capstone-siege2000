const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Sales', {
    SaleID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    StaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    TimeDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UnitID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Finished: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Abandoned: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    EndDayID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    saStockLocationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    saSaleTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SaleGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    saSentToXero: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    saCommentID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    saMainPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Autocharged: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    SalesDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    InternetSaleID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    saForiegnCurrencyToUseID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    saExchangeRate: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'Sales',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Sales$EndDayID",
        fields: [
          { name: "EndDayID" },
        ]
      },
      {
        name: "Sales$FinishedSalesForDate",
        fields: [
          { name: "TimeDate" },
          { name: "Finished" },
          { name: "Abandoned" },
        ]
      },
      {
        name: "Sales$PrimaryKey",
        unique: true,
        fields: [
          { name: "SaleID" },
        ]
      },
      {
        name: "Sales$SaleGuid",
        fields: [
          { name: "SaleGuid" },
        ]
      },
      {
        name: "Sales$SaleLookup",
        fields: [
          { name: "TimeDate" },
          { name: "Finished" },
          { name: "Abandoned" },
        ]
      },
      {
        name: "Sales$SalesDateModified",
        fields: [
          { name: "SalesDateModified" },
        ]
      },
      {
        name: "Sales$saSaleTypeID",
        fields: [
          { name: "saSaleTypeID" },
        ]
      },
      {
        name: "Sales$saStockLocationID",
        fields: [
          { name: "saStockLocationID" },
        ]
      },
      {
        name: "Sales$StaffID",
        fields: [
          { name: "StaffID" },
        ]
      },
      {
        name: "Sales$TimeDate",
        fields: [
          { name: "TimeDate" },
        ]
      },
      {
        name: "Sales$UnitID",
        fields: [
          { name: "UnitID" },
        ]
      },
    ]
  });
};
