const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RXAudit', {
    RXAuditID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    raScriptID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Script',
        key: 'ScriptID'
      }
    },
    raStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    raReasonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'RXAuditReason',
        key: 'RXAuditReasonID'
      }
    },
    AuditDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RXAuditGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    raDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RxAuditTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    raRxAuditCommentID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'RxAuditComment',
        key: 'RxAuditCommentID'
      }
    },
    raEventStartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    raEventStatusID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'EventStatus',
        key: 'EventStatusID'
      }
    },
    raEventDueDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    raEventPriorityID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    raEventStaffGroupID: {
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
    tableName: 'RXAudit',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "RxAudit$AuditDate",
        fields: [
          { name: "AuditDate" },
        ]
      },
      {
        name: "RXAudit$PrimaryKey",
        unique: true,
        fields: [
          { name: "RXAuditID" },
        ]
      },
      {
        name: "RxAudit$raEventStartDate",
        fields: [
          { name: "raEventStatusID" },
          { name: "AuditDate" },
          { name: "raEventStartDate" },
        ]
      },
      {
        name: "RXAudit$raReasonID",
        fields: [
          { name: "raReasonID" },
        ]
      },
      {
        name: "RXAudit$raScriptID",
        fields: [
          { name: "raScriptID" },
        ]
      },
      {
        name: "RXAudit$raStaffID",
        fields: [
          { name: "raStaffID" },
        ]
      },
    ]
  });
};
