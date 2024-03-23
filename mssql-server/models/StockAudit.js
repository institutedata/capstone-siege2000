const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StockAudit', {
    StockAuditID: {
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
        model: 'StockAuditReason',
        key: 'StockAuditReasonID'
      }
    },
    StockAuditDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    StockAuditGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    StockAuditDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    StockAuditTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    saStockAuditCommentID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'StockAuditComment',
        key: 'StockAuditCommentID'
      }
    },
    saStockID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Stock',
        key: 'StockID'
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
    tableName: 'StockAudit',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "StockAudit$AuditDate",
        fields: [
          { name: "StockAuditDate" },
        ]
      },
      {
        name: "StockAudit$PrimaryKey",
        unique: true,
        fields: [
          { name: "StockAuditID" },
        ]
      },
      {
        name: "StockAudit$saEventStartDate",
        fields: [
          { name: "saEventStatusID" },
          { name: "StockAuditDate" },
          { name: "saEventStartDate" },
        ]
      },
    ]
  });
};
