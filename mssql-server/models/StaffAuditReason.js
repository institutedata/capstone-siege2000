const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StaffAuditReason', {
    StaffAuditReasonID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    StaffAuditReason: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    StaffAuditReasonGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    StaffAuditReasonDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'StaffAuditReason',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "StaffAuditReason$CacheLookup",
        fields: [
          { name: "StaffAuditReasonDateModified" },
          { name: "StaffAuditReasonGuid" },
        ]
      },
      {
        name: "StaffAuditReason$PrimaryKey",
        unique: true,
        fields: [
          { name: "StaffAuditReasonID" },
        ]
      },
      {
        name: "StaffAuditReason$StaffAuditReason",
        unique: true,
        fields: [
          { name: "StaffAuditReason" },
        ]
      },
      {
        name: "StaffAuditReason$StaffAuditReasonGuid",
        fields: [
          { name: "StaffAuditReasonGuid" },
        ]
      },
      {
        name: "StaffAuditReason$StaffAuditReasonID",
        fields: [
          { name: "StaffAuditReasonID" },
        ]
      },
    ]
  });
};
