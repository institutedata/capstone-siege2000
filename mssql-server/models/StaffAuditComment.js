const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StaffAuditComment', {
    StaffAuditCommentID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    StaffAuditComment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    StaffAuditCommentGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    StaffAuditCommentDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'StaffAuditComment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "StaffAuditComment$CacheLookup",
        fields: [
          { name: "StaffAuditCommentDateModified" },
          { name: "StaffAuditCommentGuid" },
        ]
      },
      {
        name: "StaffAuditComment$PrimaryKey",
        unique: true,
        fields: [
          { name: "StaffAuditCommentID" },
        ]
      },
      {
        name: "StaffAuditComment$StaffAuditCommentGuid",
        fields: [
          { name: "StaffAuditCommentGuid" },
        ]
      },
    ]
  });
};
