const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ResthomeInternetSchemes', {
    ResthomeInternetSchemesID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    risResthomeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      references: {
        model: 'RestHome',
        key: 'RestHomeID'
      }
    },
    risInternetSchemeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      references: {
        model: 'InternetSchemes',
        key: 'InternetSchemesID'
      }
    },
    ResthomeInternetSchemesGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ResthomeInternetSchemesDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ResthomeInternetSchemes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ResthomeInternetSchemes$CacheLookup",
        fields: [
          { name: "ResthomeInternetSchemesDateModified" },
          { name: "ResthomeInternetSchemesGuid" },
        ]
      },
      {
        name: "ResthomeInternetSchemes$PrimaryKey",
        unique: true,
        fields: [
          { name: "risResthomeID" },
          { name: "risInternetSchemeID" },
        ]
      },
      {
        name: "ResthomeInternetSchemes$RestHomeGuid",
        fields: [
          { name: "ResthomeInternetSchemesGuid" },
        ]
      },
      {
        name: "ResthomeInternetSchemes$ResthomeInternetSchemesID",
        unique: true,
        fields: [
          { name: "ResthomeInternetSchemesID" },
        ]
      },
    ]
  });
};
