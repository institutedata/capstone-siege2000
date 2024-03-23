const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmailTemplate', {
    EmailTemplateID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EmailTemplateName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EmailTemplate: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EmailTemplateSubject: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    EmailTemplateGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    EmailTemplateDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EmailTemplateRules: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'EmailTemplate',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "EmailTemplate$CacheLookup",
        fields: [
          { name: "EmailTemplateDateModified" },
          { name: "EmailTemplateGuid" },
        ]
      },
      {
        name: "EmailTemplate$EmailTemplateGuid",
        fields: [
          { name: "EmailTemplateGuid" },
        ]
      },
      {
        name: "PK_EmailTemplate",
        unique: true,
        fields: [
          { name: "EmailTemplateID" },
        ]
      },
    ]
  });
};
