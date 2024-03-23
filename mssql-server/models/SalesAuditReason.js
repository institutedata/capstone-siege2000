const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesAuditReason', {
    SalesAuditReasonID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SalesAuditReason: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    SalesAuditReasonGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SalesAuditReasonDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SalesAuditReason',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SalesAuditReason$CacheLookup",
        fields: [
          { name: "SalesAuditReasonDateModified" },
          { name: "SalesAuditReasonGuid" },
        ]
      },
      {
        name: "SalesAuditReason$PrimaryKey",
        unique: true,
        fields: [
          { name: "SalesAuditReasonID" },
        ]
      },
      {
        name: "SalesAuditReason$SalesAuditReason",
        unique: true,
        fields: [
          { name: "SalesAuditReason" },
        ]
      },
      {
        name: "SalesAuditReason$SalesAuditReasonGuid",
        fields: [
          { name: "SalesAuditReasonGuid" },
        ]
      },
      {
        name: "SalesAuditReason$SalesAuditReasonID",
        fields: [
          { name: "SalesAuditReasonID" },
        ]
      },
    ]
  });
};
