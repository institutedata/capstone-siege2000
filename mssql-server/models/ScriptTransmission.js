const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ScriptTransmission', {
    ScriptTransmissionID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    stScriptID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Script',
        key: 'ScriptID'
      }
    },
    stSystemToSendTo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    TransmissionState: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ScriptTransmissionGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ScriptTransmissionDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FailedAttempts: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    stRobotID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Robot',
        key: 'RobotID'
      }
    },
    stScriptHistoryID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    stOwingDispenseID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'OwingDispensed',
        key: 'OwingDispensedID'
      }
    },
    stTextMessageID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'TextMessages',
        key: 'TextMessagesID'
      }
    },
    stEmailID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Emails',
        key: 'EmailsID'
      }
    }
  }, {
    sequelize,
    tableName: 'ScriptTransmission',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ScriptTransmission",
        unique: true,
        fields: [
          { name: "ScriptTransmissionID" },
        ]
      },
      {
        name: "ScriptTransmission$Status",
        fields: [
          { name: "stScriptID" },
          { name: "stSystemToSendTo" },
          { name: "TransmissionState" },
        ]
      },
    ]
  });
};
