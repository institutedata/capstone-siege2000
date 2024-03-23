const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StaffAudit', {
    StaffAuditID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    saStaffMemberAffectedID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    saStaffMakingChangeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    saReasonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'StaffAuditReason',
        key: 'StaffAuditReasonID'
      }
    },
    AuditDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    StaffAuditGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    StaffDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    StaffAuditTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    saStaffAuditCommentID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'StaffAuditComment',
        key: 'StaffAuditCommentID'
      }
    },
    saEventStartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    saEventDueDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    saEventPriorityID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    saEventStatusID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'EventStatus',
        key: 'EventStatusID'
      }
    },
    saEventStaffGroupID: {
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
    tableName: 'StaffAudit',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "StaffAudit$AuditDate",
        fields: [
          { name: "AuditDate" },
        ]
      },
      {
        name: "StaffAudit$PrimaryKey",
        unique: true,
        fields: [
          { name: "StaffAuditID" },
        ]
      },
      {
        name: "StaffAudit$saEventStartDate",
        fields: [
          { name: "AuditDate" },
          { name: "saEventStartDate" },
        ]
      },
    ]
  });
};
