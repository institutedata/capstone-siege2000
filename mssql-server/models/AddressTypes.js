const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AddressTypes', {
    AddressTypesID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    AddressTypes: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    atMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    AddressTypesGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    AddressTypesDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AddressTypes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "AddressTypes$AddressTypes",
        unique: true,
        fields: [
          { name: "AddressTypes" },
        ]
      },
      {
        name: "AddressTypes$AddressTypesGuid",
        fields: [
          { name: "AddressTypesGuid" },
        ]
      },
      {
        name: "AddressTypes$CacheLookup",
        fields: [
          { name: "AddressTypesDateModified" },
          { name: "AddressTypesGuid" },
        ]
      },
      {
        name: "PK_AddressTypes",
        unique: true,
        fields: [
          { name: "AddressTypesID" },
        ]
      },
    ]
  });
};
