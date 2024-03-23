const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ArchiveRxAuditComment', {
    RxAuditComment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RxAuditCommentGuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    RxAuditCommentDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ArchiveRxAuditComment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ArchiveRxAuditComment$PrimaryKey",
        unique: true,
        fields: [
          { name: "RxAuditCommentGuid" },
        ]
      },
    ]
  });
};
