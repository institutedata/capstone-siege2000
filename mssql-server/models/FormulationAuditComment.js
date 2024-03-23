const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FormulationAuditComment', {
    FormulationAuditCommentID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FormulationAuditComment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FormulationAuditCommentGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FormulationAuditCommentDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'FormulationAuditComment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FormulationAuditComment$CacheLookup",
        fields: [
          { name: "FormulationAuditCommentDateModified" },
          { name: "FormulationAuditCommentGuid" },
        ]
      },
      {
        name: "FormulationAuditComment$FormulationAuditCommentGuid",
        fields: [
          { name: "FormulationAuditCommentGuid" },
        ]
      },
      {
        name: "FormulationAuditComment$PrimaryKey",
        unique: true,
        fields: [
          { name: "FormulationAuditCommentID" },
        ]
      },
    ]
  });
};
