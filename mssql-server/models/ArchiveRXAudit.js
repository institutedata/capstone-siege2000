const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ArchiveRXAudit', {
    raScriptID: {
      type: DataTypes.UUID,
      allowNull: true
    },
    raStaffID: {
      type: DataTypes.UUID,
      allowNull: true
    },
    raReasonID: {
      type: DataTypes.UUID,
      allowNull: true
    },
    AuditDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RXAuditGuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    raDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RxAuditTypeID: {
      type: DataTypes.UUID,
      allowNull: true
    },
    raRxAuditCommentID: {
      type: DataTypes.UUID,
      allowNull: true
    },
    raEventStartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    raEventStatusID: {
      type: DataTypes.UUID,
      allowNull: true
    },
    raEventDueDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    raEventPriorityID: {
      type: DataTypes.UUID,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ArchiveRXAudit',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ArchiveRXAudit$PrimaryKey",
        unique: true,
        fields: [
          { name: "RXAuditGuid" },
        ]
      },
    ]
  });
};
