const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PromotionalConsentTypes', {
    PromotionalConsentTypesID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PromotionalConsentTypes: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pctMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    PromotionalConsentTypesGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PromotionalConsentTypesDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PromotionalConsentTypes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PromotionalConsentTypes",
        unique: true,
        fields: [
          { name: "PromotionalConsentTypesID" },
        ]
      },
      {
        name: "PromotionalConsentTypes$CacheLookup",
        fields: [
          { name: "PromotionalConsentTypesDateModified" },
          { name: "PromotionalConsentTypesGuid" },
        ]
      },
      {
        name: "PromotionalConsentTypes$PromotionalConsentTypes",
        unique: true,
        fields: [
          { name: "PromotionalConsentTypes" },
        ]
      },
      {
        name: "PromotionalConsentTypes$PromotionalConsentTypesGuid",
        fields: [
          { name: "PromotionalConsentTypesGuid" },
        ]
      },
    ]
  });
};
