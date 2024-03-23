const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AccountCategory', {
    AccountcategoryID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    AccountCategory: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AccountFee: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ApplyOverdueCharges: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ApplyOverdueFlatFee: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    OverdueFlatFee: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    OverdueInterestRate: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    OverdueStatementMessage: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AccountFeeText: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AccountCategoryGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    AccountCategoryDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AccountCategoryMessage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ThreeMonthOverdue: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    RolloverDates: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    MinimumCharge: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    XeroFrequency: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    XeroInvoiceFormat: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'AccountCategory',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "AccountCategory$AccountCategoryGuid",
        fields: [
          { name: "AccountCategoryGuid" },
        ]
      },
      {
        name: "AccountCategory$AccountcategoryID",
        fields: [
          { name: "AccountcategoryID" },
        ]
      },
      {
        name: "AccountCategory$CacheLookup",
        fields: [
          { name: "AccountCategoryDateModified" },
          { name: "AccountCategoryGuid" },
        ]
      },
      {
        name: "AccountCategory$PrimaryKey",
        unique: true,
        fields: [
          { name: "AccountcategoryID" },
        ]
      },
    ]
  });
};
