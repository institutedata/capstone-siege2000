const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FormulationAuditReason', {
    FormulationAuditReasonID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FormulationAuditReason: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    FormulationAuditReasonGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FormulationAuditReasonDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'FormulationAuditReason',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FormulationAuditReason$CacheLookup",
        fields: [
          { name: "FormulationAuditReasonDateModified" },
          { name: "FormulationAuditReasonGuid" },
        ]
      },
      {
        name: "FormulationAuditReason$FormulationAuditReason",
        unique: true,
        fields: [
          { name: "FormulationAuditReason" },
        ]
      },
      {
        name: "FormulationAuditReason$FormulationAuditReasonGuid",
        fields: [
          { name: "FormulationAuditReasonGuid" },
        ]
      },
      {
        name: "FormulationAuditReason$FormulationAuditReasonID",
        fields: [
          { name: "FormulationAuditReasonID" },
        ]
      },
      {
        name: "FormulationAuditReason$PrimaryKey",
        unique: true,
        fields: [
          { name: "FormulationAuditReasonID" },
        ]
      },
    ]
  });
};
