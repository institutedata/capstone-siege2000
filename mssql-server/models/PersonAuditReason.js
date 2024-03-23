const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PersonAuditReason', {
    PersonAuditReasonID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PersonAuditReason: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    PersonAuditReasonGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PersonAuditReasonDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PersonAuditReasonType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'PersonAuditReason',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PersonAuditReason$CacheLookup",
        fields: [
          { name: "PersonAuditReasonDateModified" },
          { name: "PersonAuditReasonGuid" },
        ]
      },
      {
        name: "PersonAuditReason$PersonAuditReasonGuid",
        fields: [
          { name: "PersonAuditReasonGuid" },
        ]
      },
      {
        name: "PersonAuditReason$PrimaryKey",
        unique: true,
        fields: [
          { name: "PersonAuditReasonID" },
        ]
      },
    ]
  });
};
