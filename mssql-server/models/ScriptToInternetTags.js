const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ScriptToInternetTags', {
    ScriptToInternetTagsID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sitInternetTagID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    sitScriptID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ScriptToInternetTagsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ScriptToInternetTagsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ScriptToInternetTags',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ScriptToInternetTags",
        unique: true,
        fields: [
          { name: "ScriptToInternetTagsID" },
        ]
      },
      {
        name: "ScriptToInternetTags$CacheLookup",
        fields: [
          { name: "ScriptToInternetTagsDateModified" },
          { name: "ScriptToInternetTagsGuid" },
        ]
      },
      {
        name: "ScriptToInternetTags$ScriptToInternetTagsGuid",
        fields: [
          { name: "ScriptToInternetTagsGuid" },
        ]
      },
    ]
  });
};
