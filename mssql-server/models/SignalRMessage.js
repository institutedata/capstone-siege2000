const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SignalRMessage', {
    SignalRMessageID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SignalRMessage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SignalRMessageGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SignalRMessageDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SignalRMessageDateCreated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SignalRMessageType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    SignalRMessageStatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    srmStaffID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    srmSignalRSiteID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'SignalRSite',
        key: 'SignalRSiteID'
      }
    },
    SignalRMessageResult: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    srmTextMessageID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'TextMessages',
        key: 'TextMessagesID'
      }
    },
    srmKioskScriptID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    srmWebLoginID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    srmStockLocationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    srmUnitProcessingID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Computer',
        key: 'UnitID'
      }
    }
  }, {
    sequelize,
    tableName: 'SignalRMessage',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SignalRMessage$CacheLookup",
        fields: [
          { name: "SignalRMessageDateModified" },
          { name: "SignalRMessageGuid" },
        ]
      },
      {
        name: "SignalRMessage$PrimaryKey",
        unique: true,
        fields: [
          { name: "SignalRMessageID" },
        ]
      },
      {
        name: "SignalRMessage$SignalRMessageGuid",
        fields: [
          { name: "SignalRMessageGuid" },
        ]
      },
      {
        name: "SignalRMessage$srmTextMessageID",
        fields: [
          { name: "srmTextMessageID" },
        ]
      },
    ]
  });
};
