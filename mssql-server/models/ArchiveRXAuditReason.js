const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ArchiveRXAuditReason', {
    RXAuditReason: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    RXAuditReasonGuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    RXAuditReasonDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ArchiveRXAuditReason',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ArchiveRXAuditReason$PrimaryKey",
        unique: true,
        fields: [
          { name: "RXAuditReasonGuid" },
        ]
      },
    ]
  });
};
