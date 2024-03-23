const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ContactTypes', {
    ContactTypesID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ContactTypes: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ctMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    ContactTypesGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ContactTypesDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ContactTypes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ContactTypes$CacheLookup",
        fields: [
          { name: "ContactTypesDateModified" },
          { name: "ContactTypesGuid" },
        ]
      },
      {
        name: "ContactTypes$ContactTypes",
        unique: true,
        fields: [
          { name: "ContactTypes" },
        ]
      },
      {
        name: "ContactTypes$ContactTypesGuid",
        fields: [
          { name: "ContactTypesGuid" },
        ]
      },
      {
        name: "PK_ContactTypes",
        unique: true,
        fields: [
          { name: "ContactTypesID" },
        ]
      },
    ]
  });
};
