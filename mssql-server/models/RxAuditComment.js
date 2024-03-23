const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RxAuditComment', {
    RxAuditCommentID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RxAuditComment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RxAuditCommentGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    RxAuditCommentDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'RxAuditComment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "RxAuditComment$CacheLookup",
        fields: [
          { name: "RxAuditCommentDateModified" },
          { name: "RxAuditCommentGuid" },
        ]
      },
      {
        name: "RxAuditComment$PrimaryKey",
        unique: true,
        fields: [
          { name: "RxAuditCommentID" },
        ]
      },
      {
        name: "RxAuditComment$RxAuditCommentGuid",
        fields: [
          { name: "RxAuditCommentGuid" },
        ]
      },
    ]
  });
};
