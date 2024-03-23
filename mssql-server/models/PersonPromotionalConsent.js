const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PersonPromotionalConsent', {
    PersonPromotionalConsentID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    ppcPersonID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    PromotionalConsentID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    PersonPromotionalConsentGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PersonPromotionalConsentDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PromotionalConsentStatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'PersonPromotionalConsent',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PersonPromotionalConsent$PersonPromotionalConsentID",
        unique: true,
        fields: [
          { name: "PersonPromotionalConsentID" },
        ]
      },
      {
        name: "PK_PersonPromotionalConsent",
        unique: true,
        fields: [
          { name: "ppcPersonID" },
          { name: "PromotionalConsentID" },
        ]
      },
    ]
  });
};
