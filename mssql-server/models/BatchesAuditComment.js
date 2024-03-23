const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BatchesAuditComment', {
    BatchesAuditCommentID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    BatchesAuditComment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    BatchesAuditCommentGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    BatchesAuditCommentDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'BatchesAuditComment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "BatchesAuditComment$BatchesAuditCommentGuid",
        fields: [
          { name: "BatchesAuditCommentGuid" },
        ]
      },
      {
        name: "BatchesAuditComment$CacheLookup",
        fields: [
          { name: "BatchesAuditCommentDateModified" },
          { name: "BatchesAuditCommentGuid" },
        ]
      },
      {
        name: "BatchesAuditComment$PrimaryKey",
        unique: true,
        fields: [
          { name: "BatchesAuditCommentID" },
        ]
      },
    ]
  });
};
