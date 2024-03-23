const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NewCompanionSales', {
    NewCompanionSaleID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    csStockID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    csDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    csCompanionSchemeID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CompanionSaleType: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NewCompanionSalesGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    NewCompanionSalesDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NewCompanionSalesDateCreated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CompanionText: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ncsMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'NewCompanionSales',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "NewCompanionSale$PrimaryKey",
        unique: true,
        fields: [
          { name: "NewCompanionSaleID" },
        ]
      },
      {
        name: "NewCompanionSales$CacheLookup",
        fields: [
          { name: "NewCompanionSalesDateModified" },
          { name: "NewCompanionSalesGuid" },
        ]
      },
      {
        name: "NewCompanionSales$NewCompanionSalesGuid",
        fields: [
          { name: "NewCompanionSalesGuid" },
        ]
      },
    ]
  });
};
