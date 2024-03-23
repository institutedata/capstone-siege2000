const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MultiStoreRego', {
    StoreRegoField: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    msStockLocationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    StoreRegoDetails: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MULTISTOREREGOID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    MULTISTOREREGOGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    MULTISTOREREGODateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MultiStoreRego',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "MULTISTOREREGO$CacheLookup",
        fields: [
          { name: "MULTISTOREREGODateModified" },
          { name: "MULTISTOREREGOGuid" },
        ]
      },
      {
        name: "MultiStoreRego$msStockLocationID",
        fields: [
          { name: "msStockLocationID" },
        ]
      },
      {
        name: "MULTISTOREREGO$MULTISTOREREGOGuid",
        fields: [
          { name: "MULTISTOREREGOGuid" },
        ]
      },
      {
        name: "MultiStoreRego$PrimaryKey",
        unique: true,
        fields: [
          { name: "StoreRegoField" },
          { name: "msStockLocationID" },
        ]
      },
    ]
  });
};
