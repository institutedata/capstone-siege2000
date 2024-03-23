const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CompanionSaleItemDetails', {
    CompanionSaleItemID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CompanionSaleItemType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CompanionText: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    COMPANIONSALEITEMDETAILSID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    COMPANIONSALEITEMDETAILSGuid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    COMPANIONSALEITEMDETAILSDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CompanionSaleItemDetails',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "COMPANIONSALEITEMDETAILS$CacheLookup",
        fields: [
          { name: "COMPANIONSALEITEMDETAILSDateModified" },
          { name: "COMPANIONSALEITEMDETAILSGuid" },
        ]
      },
      {
        name: "COMPANIONSALEITEMDETAILS$COMPANIONSALEITEMDETAILSGuid",
        fields: [
          { name: "COMPANIONSALEITEMDETAILSGuid" },
        ]
      },
      {
        name: "CompanionSaleItemDetails$CompanionSaleItemID",
        fields: [
          { name: "CompanionSaleItemID" },
        ]
      },
      {
        name: "CompanionSaleItemDetails$CompanionSaleItemType",
        fields: [
          { name: "CompanionSaleItemType" },
        ]
      },
      {
        name: "CompanionSaleItemDetails$PrimaryKey",
        unique: true,
        fields: [
          { name: "CompanionSaleItemID" },
          { name: "CompanionSaleItemType" },
        ]
      },
    ]
  });
};
