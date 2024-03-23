const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('InternetSchemes', {
    InternetSchemesID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    InternetSchemesName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    InternetSchemesURL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    InternetSchemesGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    InternetSchemesDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PostData: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    isMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    InternetSchemeType: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    InternetSchemeEnabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    UserInternetSchemeType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    UseUserSchemeType: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'InternetSchemes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "InternetSchemes$CacheLookup",
        fields: [
          { name: "InternetSchemesDateModified" },
          { name: "InternetSchemesGuid" },
        ]
      },
      {
        name: "InternetSchemes$InternetSchemesGuid",
        fields: [
          { name: "InternetSchemesGuid" },
        ]
      },
      {
        name: "InternetSchemes$PrimaryKey",
        unique: true,
        fields: [
          { name: "InternetSchemesID" },
        ]
      },
    ]
  });
};
