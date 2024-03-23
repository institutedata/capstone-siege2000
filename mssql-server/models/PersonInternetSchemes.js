const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PersonInternetSchemes', {
    PersonInternetSchemesID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PersonInternetSchemes_InternetSchemesID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'InternetSchemes',
        key: 'InternetSchemesID'
      }
    },
    PersonInternetSchemes_PersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    PersonInternetSchemesGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PersonInternetSchemesDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PersonInternetSchemes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PersonInternetSchemes$CacheLookup",
        fields: [
          { name: "PersonInternetSchemesDateModified" },
          { name: "PersonInternetSchemesGuid" },
        ]
      },
      {
        name: "PersonInternetSchemes$PersonInternetSchemesGuid",
        fields: [
          { name: "PersonInternetSchemesGuid" },
        ]
      },
      {
        name: "PersonInternetSchemes$PrimaryKey",
        unique: true,
        fields: [
          { name: "PersonInternetSchemesID" },
        ]
      },
    ]
  });
};
