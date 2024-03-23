const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AccountAudit', {
    AccountAuditID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    aaStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    aaReasonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    AccountAuditDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AccountAuditGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    AccountAuditDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AccountAuditTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    aaAccountAuditCommentID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    aaAccountID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    aaEventStartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    aaEventStatusID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    aaEventDueDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    aaEventPriorityID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    aaEventStaffGroupID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'AccountAudit',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "AccountAudit$aaEventStartDate",
        fields: [
          { name: "AccountAuditDate" },
          { name: "aaEventStartDate" },
          { name: "aaEventStatusID" },
        ]
      },
      {
        name: "AccountAudit$AuditDate",
        fields: [
          { name: "AccountAuditDate" },
        ]
      },
      {
        name: "AccountAudit$PrimaryKey",
        unique: true,
        fields: [
          { name: "AccountAuditID" },
        ]
      },
    ]
  });
};
