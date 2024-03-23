const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PersonAudit', {
    PersonAuditID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    paPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    paStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    paReasonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'PersonAuditReason',
        key: 'PersonAuditReasonID'
      }
    },
    AuditDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    paDateUpdated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PersonAuditGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    paTextMessageID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'TextMessages',
        key: 'TextMessagesID'
      }
    },
    paCommentID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'PatientAuditComment',
        key: 'PatientAuditCommentID'
      }
    },
    paHLInMessagesID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    paHLOutMessagesID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    paEventStatusID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'EventStatus',
        key: 'EventStatusID'
      }
    },
    paEmailID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Emails',
        key: 'EmailsID'
      }
    },
    paStaffAffectedID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    paDoctorID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Doctor',
        key: 'DoctorID'
      }
    },
    paReminderStartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    paHIPSessionID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'HIPSession',
        key: 'HIPSessionID'
      }
    },
    paSignalRMessageID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'SignalRMessage',
        key: 'SignalRMessageID'
      }
    },
    paEventStartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    paEventDueDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    paEventPriorityID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    paEventStaffGroupID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'StaffGroup',
        key: 'StaffGroupID'
      }
    }
  }, {
    sequelize,
    tableName: 'PersonAudit',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PersonAudit$AuditDate",
        fields: [
          { name: "AuditDate" },
        ]
      },
      {
        name: "PersonAudit$paEventStartDate",
        fields: [
          { name: "AuditDate" },
          { name: "paEventStartDate" },
        ]
      },
      {
        name: "PersonAudit$paPersonID",
        fields: [
          { name: "paPersonID" },
        ]
      },
      {
        name: "PersonAudit$PrimaryKey",
        unique: true,
        fields: [
          { name: "PersonAuditID" },
        ]
      },
    ]
  });
};
