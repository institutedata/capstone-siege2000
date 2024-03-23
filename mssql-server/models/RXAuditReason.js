const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RXAuditReason', {
    RXAuditReasonID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RXAuditReason: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    RXAuditReasonGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    RXAuditReasonDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'RXAuditReason',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "RXAuditReason$CacheLookup",
        fields: [
          { name: "RXAuditReasonDateModified" },
          { name: "RXAuditReasonGuid" },
        ]
      },
      {
        name: "RXAuditReason$PrimaryKey",
        unique: true,
        fields: [
          { name: "RXAuditReasonID" },
        ]
      },
      {
        name: "RXAuditReason$RXAuditReason",
        unique: true,
        fields: [
          { name: "RXAuditReason" },
        ]
      },
      {
        name: "RXAuditReason$RXAuditReasonGuid",
        fields: [
          { name: "RXAuditReasonGuid" },
        ]
      },
      {
        name: "RXAuditReason$RXAuditReasonID",
        fields: [
          { name: "RXAuditReasonID" },
        ]
      },
    ]
  });
};
