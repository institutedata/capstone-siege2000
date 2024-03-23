const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DoctorAuditReason', {
    DoctorAuditReasonID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DoctorAuditReason: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    DoctorAuditReasonGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DoctorAuditReasonDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DoctorAuditReason',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "DoctorAuditReason$CacheLookup",
        fields: [
          { name: "DoctorAuditReasonDateModified" },
          { name: "DoctorAuditReasonGuid" },
        ]
      },
      {
        name: "DoctorAuditReason$DoctorAuditReason",
        unique: true,
        fields: [
          { name: "DoctorAuditReason" },
        ]
      },
      {
        name: "DoctorAuditReason$DoctorAuditReasonGuid",
        fields: [
          { name: "DoctorAuditReasonGuid" },
        ]
      },
      {
        name: "DoctorAuditReason$DoctorAuditReasonID",
        fields: [
          { name: "DoctorAuditReasonID" },
        ]
      },
      {
        name: "DoctorAuditReason$PrimaryKey",
        unique: true,
        fields: [
          { name: "DoctorAuditReasonID" },
        ]
      },
    ]
  });
};
