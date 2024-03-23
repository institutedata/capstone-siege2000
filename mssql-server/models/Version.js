const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Version', {
    ProgramName: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    VersionNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SystemFolder: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    DateCheckedOnMaster: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MasterVersionNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    VersionID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    VersionGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    VersionDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Version',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Version$CacheLookup",
        fields: [
          { name: "VersionDateModified" },
          { name: "VersionGuid" },
        ]
      },
      {
        name: "Version$PrimaryKey",
        unique: true,
        fields: [
          { name: "ProgramName" },
        ]
      },
      {
        name: "Version$VersionGuid",
        fields: [
          { name: "VersionGuid" },
        ]
      },
    ]
  });
};
