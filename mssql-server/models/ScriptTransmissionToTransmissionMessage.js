const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ScriptTransmissionToTransmissionMessage', {
    ScriptTransmissionToTransmissionMessageID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    stmScriptTransmissionID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stmScriptTransmissionMessageID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stmDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ScriptTransmissionToTransmissionMessageGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ScriptTransmissionToTransmissionMessageDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ScriptTransmissionToTransmissionMessage',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ScriptTransmissionToTransmissionMessage",
        unique: true,
        fields: [
          { name: "ScriptTransmissionToTransmissionMessageID" },
        ]
      },
      {
        name: "ScriptTransmissionToTransmissionMessage$CacheLookup",
        fields: [
          { name: "ScriptTransmissionToTransmissionMessageDateModified" },
          { name: "ScriptTransmissionToTransmissionMessageGuid" },
        ]
      },
      {
        name: "ScriptTransmissionToTransmissionMessage$ScriptID",
        fields: [
          { name: "stmScriptTransmissionMessageID" },
        ]
      },
      {
        name: "ScriptTransmissionToTransmissionMessage$ScriptTransmissionToTransmissionMessageGuid",
        fields: [
          { name: "ScriptTransmissionToTransmissionMessageGuid" },
        ]
      },
      {
        name: "ScriptTransmissionToTransmissionMessage$stmScriptTransmissionID",
        fields: [
          { name: "stmScriptTransmissionID" },
        ]
      },
    ]
  });
};
