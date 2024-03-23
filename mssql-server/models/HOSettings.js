const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HOSettings', {
    HOSettingID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ExportName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    HOSupplierID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    FTPFolder: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DontSendGP: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ExportStartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HOSettingsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    HOSettingsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'HOSettings',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "HOSettings$CacheLookup",
        fields: [
          { name: "HOSettingsDateModified" },
          { name: "HOSettingsGuid" },
        ]
      },
      {
        name: "HOSettings$HOSettingID",
        fields: [
          { name: "HOSettingID" },
        ]
      },
      {
        name: "HOSettings$HOSettingsGuid",
        fields: [
          { name: "HOSettingsGuid" },
        ]
      },
      {
        name: "HOSettings$PrimaryKey",
        unique: true,
        fields: [
          { name: "HOSettingID" },
        ]
      },
      {
        name: "HOSettings$StartDate",
        fields: [
          { name: "ExportStartDate" },
        ]
      },
    ]
  });
};
