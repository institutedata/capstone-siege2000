const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CompanionScheme', {
    CompanionSchemeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CompanionScheme: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cshActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    cshDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    CompanionSchemeGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    CompanionSchemeDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CompanionSchemeDateCreated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cshMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    cshShortCode: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    cshLogo: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CompanionScheme',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "CompanionScheme$CacheLookup",
        fields: [
          { name: "CompanionSchemeDateModified" },
          { name: "CompanionSchemeGuid" },
        ]
      },
      {
        name: "CompanionScheme$CompanionSchemeGuid",
        fields: [
          { name: "CompanionSchemeGuid" },
        ]
      },
      {
        name: "CompanionScheme$PrimaryKey",
        unique: true,
        fields: [
          { name: "CompanionSchemeID" },
        ]
      },
    ]
  });
};
