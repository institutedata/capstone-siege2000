const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MultiHeaderCode', {
    mhStockLocationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    mhSupplierID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      references: {
        model: 'Supplier',
        key: 'SupplierID'
      }
    },
    mhHeaderCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mhHOHeaderCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MULTIHEADERCODEID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    MULTIHEADERCODEGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    MULTIHEADERCODEDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MultiHeaderCode',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "MULTIHEADERCODE$CacheLookup",
        fields: [
          { name: "MULTIHEADERCODEDateModified" },
          { name: "MULTIHEADERCODEGuid" },
        ]
      },
      {
        name: "MultiHeaderCode$mhStockLocationID",
        fields: [
          { name: "mhStockLocationID" },
        ]
      },
      {
        name: "MultiHeaderCode$mhSupplierID",
        fields: [
          { name: "mhSupplierID" },
        ]
      },
      {
        name: "MULTIHEADERCODE$MULTIHEADERCODEGuid",
        fields: [
          { name: "MULTIHEADERCODEGuid" },
        ]
      },
      {
        name: "MultiHeaderCode$PrimaryKey",
        unique: true,
        fields: [
          { name: "mhStockLocationID" },
          { name: "mhSupplierID" },
        ]
      },
    ]
  });
};
