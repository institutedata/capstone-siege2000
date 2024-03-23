const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PatientAuditComment', {
    PatientAuditCommentID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PatientAuditComment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PatientAuditCommentGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PatientAuditCommentDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PatientAuditComment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PatientAuditComment$CacheLookup",
        fields: [
          { name: "PatientAuditCommentDateModified" },
          { name: "PatientAuditCommentGuid" },
        ]
      },
      {
        name: "PatientAuditComment$PatientAuditCommentGuid",
        fields: [
          { name: "PatientAuditCommentGuid" },
        ]
      },
      {
        name: "PatientAuditComment$PrimaryKey",
        unique: true,
        fields: [
          { name: "PatientAuditCommentID" },
        ]
      },
    ]
  });
};
