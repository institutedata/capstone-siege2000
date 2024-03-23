const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CompanionSales', {
    CompanionID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CompanionName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DispMessage: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    DispPDF: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    POSMessage: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    POSPdf: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    POSSummary: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    POSReceipt: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    POSDisplayUnit: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    CompanionSalesGuid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CompanionSalesDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CompanionSales',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "CompanionSales$CacheLookup",
        fields: [
          { name: "CompanionSalesDateModified" },
          { name: "CompanionSalesGuid" },
        ]
      },
      {
        name: "CompanionSales$CompanionSalesGuid",
        fields: [
          { name: "CompanionSalesGuid" },
        ]
      },
      {
        name: "CompanionSales$comSupplierID",
        fields: [
          { name: "CompanionID" },
        ]
      },
      {
        name: "CompanionSales$PrimaryKey",
        unique: true,
        fields: [
          { name: "CompanionID" },
        ]
      },
    ]
  });
};
