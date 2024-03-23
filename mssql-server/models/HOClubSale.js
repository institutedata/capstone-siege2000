const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HOClubSale', {
    SaleItemID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    TimeDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Retail: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Quantity: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    HOPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SpecialItemType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ClubID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Club',
        key: 'ClubID'
      }
    },
    ClubPoints: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ActionID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SaleItemGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    HOStockID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Discount: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    SaleGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    NoDiscount: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    HOActionGU: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'HOClubSale',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "HOClubSale$ActionID",
        fields: [
          { name: "ActionID" },
        ]
      },
      {
        name: "HOClubSale$ClubID",
        fields: [
          { name: "ClubID" },
        ]
      },
      {
        name: "HOClubSale$HOStockID",
        fields: [
          { name: "HOStockID" },
        ]
      },
      {
        name: "HOClubSale$PersonID",
        fields: [
          { name: "HOPersonID" },
        ]
      },
      {
        name: "HOClubSale$PrimaryKey",
        unique: true,
        fields: [
          { name: "SaleItemID" },
        ]
      },
      {
        name: "HOClubSale$SaleGuid",
        fields: [
          { name: "SaleGuid" },
        ]
      },
      {
        name: "HOClubSale$SaleItemGuid",
        fields: [
          { name: "SaleItemGuid" },
        ]
      },
      {
        name: "HOClubSale$SaleItemID",
        unique: true,
        fields: [
          { name: "SaleItemID" },
        ]
      },
      {
        name: "HOClubSale$SpecialItemType",
        fields: [
          { name: "SpecialItemType" },
        ]
      },
    ]
  });
};
