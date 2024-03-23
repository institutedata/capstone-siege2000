const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesAudit', {
    SalesAuditID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    saStaffID: {
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
        model: 'SalesAuditReason',
        key: 'SalesAuditReasonID'
      }
    },
    AuditDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SalesAuditGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SalesAuditDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SalesAuditTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    saSalesAuditCommentID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'SalesAuditComment',
        key: 'SalesAuditCommentID'
      }
    },
    saSaleID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Sales',
        key: 'SaleID'
      }
    },
    saEventStartDate: {
      type: DataTypes.DATE,
      allowNull: true
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
    saEventDueDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    saEventPriorityID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    tableName: 'SalesAudit',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SalesAudit$AuditDate",
        fields: [
          { name: "AuditDate" },
        ]
      },
      {
        name: "SalesAudit$PrimaryKey",
        unique: true,
        fields: [
          { name: "SalesAuditID" },
        ]
      },
      {
        name: "SalesAudit$saEventStartDate",
        fields: [
          { name: "AuditDate" },
          { name: "saEventStartDate" },
        ]
      },
    ]
  });
};
