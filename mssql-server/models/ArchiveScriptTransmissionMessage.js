const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ArchiveScriptTransmissionMessage', {
    stmSystemToSendTo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ScriptTransmissionMessage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MessageIdentifier: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ScriptTransmissionMessageGuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    ScriptTransmissionMessageDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ScriptTransmissionMessageAdditionalDetails: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PersonIdentifier: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    MessageType: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    stmPersonID: {
      type: DataTypes.UUID,
      allowNull: true
    },
    stmStaffID: {
      type: DataTypes.UUID,
      allowNull: true
    },
    ScriptTransmissionMessageDateCreated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SuccessfullMessage: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    stmRobotID: {
      type: DataTypes.UUID,
      allowNull: true
    },
    SecondaryIdentifier: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ResponseReceievedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ResponseTimeInMilliseconds: {
      type: DataTypes.REAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ArchiveScriptTransmissionMessage',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ArchiveScriptTransmissionMessage",
        unique: true,
        fields: [
          { name: "ScriptTransmissionMessageGuid" },
        ]
      },
      {
        name: "ScriptTransmissionMessage$MessageIdentifier",
        fields: [
          { name: "MessageIdentifier" },
        ]
      },
      {
        name: "ScriptTransmissionMessage$PersonIdentifier",
        fields: [
          { name: "PersonIdentifier" },
        ]
      },
    ]
  });
};
