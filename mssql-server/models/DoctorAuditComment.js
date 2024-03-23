const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DoctorAuditComment', {
    DoctorAuditCommentID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DoctorAuditComment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DoctorAuditCommentGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DoctorAuditCommentDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DoctorAuditComment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "DoctorAuditComment$CacheLookup",
        fields: [
          { name: "DoctorAuditCommentDateModified" },
          { name: "DoctorAuditCommentGuid" },
        ]
      },
      {
        name: "DoctorAuditComment$DoctorAuditCommentGuid",
        fields: [
          { name: "DoctorAuditCommentGuid" },
        ]
      },
      {
        name: "DoctorAuditComment$PrimaryKey",
        unique: true,
        fields: [
          { name: "DoctorAuditCommentID" },
        ]
      },
    ]
  });
};
