const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CompanionSaleItem', {
    CompanionSaleItemID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    csiStockID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    csiCompanionID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    csiSupplierDBID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CompanionSaleItemGuid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CompanionSaleItemDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CompanionSaleItem',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "CompanionSaleItem$CacheLookup",
        fields: [
          { name: "CompanionSaleItemDateModified" },
          { name: "CompanionSaleItemGuid" },
        ]
      },
      {
        name: "CompanionSaleItem$CompanionSaleItemGuid",
        fields: [
          { name: "CompanionSaleItemGuid" },
        ]
      },
      {
        name: "CompanionSaleItem$CompanionSaleItemID",
        fields: [
          { name: "CompanionSaleItemID" },
        ]
      },
      {
        name: "CompanionSaleItem$csiCompanionID",
        fields: [
          { name: "csiCompanionID" },
        ]
      },
      {
        name: "CompanionSaleItem$csiSupplierDBID",
        fields: [
          { name: "csiSupplierDBID" },
        ]
      },
      {
        name: "CompanionSaleItem$DrugID",
        fields: [
          { name: "csiStockID" },
        ]
      },
      {
        name: "CompanionSaleItem$PrimaryKey",
        unique: true,
        fields: [
          { name: "CompanionSaleItemID" },
        ]
      },
    ]
  });
};
