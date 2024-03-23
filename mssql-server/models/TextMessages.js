const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TextMessages', {
    TextMessagesID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tmPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    TheMessage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AuditDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tmDateUpdated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TextMessagesGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    tmMessageSent: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    tmStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    tmDoctorID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Doctor',
        key: 'DoctorID'
      }
    },
    tmAccountID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Account',
        key: 'AccountID'
      }
    },
    tmReplySignalRMessageID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'SignalRMessage',
        key: 'SignalRMessageID'
      }
    },
    MobileNoSentTo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TextMessageRules: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tmTextMessageTemplateID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'TextMessageTemplate',
        key: 'TextMessageTemplateID'
      }
    },
    tmStockLocationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'TextMessages',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "TextMessages$PrimaryKey",
        unique: true,
        fields: [
          { name: "TextMessagesID" },
        ]
      },
    ]
  });
};
