const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CompanionSaleLinks', {
    CompanionSaleItemID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CompanionSaleStockID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    COMPANIONSALELINKSID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    COMPANIONSALELINKSGuid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    COMPANIONSALELINKSDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CompanionSaleLinks',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "COMPANIONSALELINKS$CacheLookup",
        fields: [
          { name: "COMPANIONSALELINKSDateModified" },
          { name: "COMPANIONSALELINKSGuid" },
        ]
      },
      {
        name: "CompanionSaleLinks$CompanionSaleItemID",
        fields: [
          { name: "CompanionSaleItemID" },
        ]
      },
      {
        name: "COMPANIONSALELINKS$COMPANIONSALELINKSGuid",
        fields: [
          { name: "COMPANIONSALELINKSGuid" },
        ]
      },
      {
        name: "CompanionSaleLinks$CompanionSaleStockID",
        fields: [
          { name: "CompanionSaleStockID" },
        ]
      },
      {
        name: "CompanionSaleLinks$PrimaryKey",
        unique: true,
        fields: [
          { name: "CompanionSaleItemID" },
          { name: "CompanionSaleStockID" },
        ]
      },
    ]
  });
};
