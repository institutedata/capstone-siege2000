const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BatchesAudit', {
    BatchesAuditID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    baStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    baReasonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    BatchesAuditDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    BatchesAuditGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    BatchesAuditDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    BatchesAuditTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    baBatchesAuditCommentID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    baBatchID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    baEventStartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    baEventStatusID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    baEventDueDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    baEventPriorityID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    baEventStaffGroupID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'BatchesAudit',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "BatchesAudit$AuditDate",
        fields: [
          { name: "BatchesAuditDate" },
        ]
      },
      {
        name: "BatchesAudit$baEventStartDate",
        fields: [
          { name: "BatchesAuditDate" },
          { name: "baEventStartDate" },
          { name: "baEventStatusID" },
        ]
      },
      {
        name: "BatchesAudit$PrimaryKey",
        unique: true,
        fields: [
          { name: "BatchesAuditID" },
        ]
      },
    ]
  });
};
