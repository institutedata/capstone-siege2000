const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesAuditComment', {
    SalesAuditCommentID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SalesAuditComment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SalesAuditCommentGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SalesAuditCommentDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SalesAuditComment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SalesAuditComment$CacheLookup",
        fields: [
          { name: "SalesAuditCommentDateModified" },
          { name: "SalesAuditCommentGuid" },
        ]
      },
      {
        name: "SalesAuditComment$PrimaryKey",
        unique: true,
        fields: [
          { name: "SalesAuditCommentID" },
        ]
      },
      {
        name: "SalesAuditComment$SalesAuditCommentGuid",
        fields: [
          { name: "SalesAuditCommentGuid" },
        ]
      },
    ]
  });
};
