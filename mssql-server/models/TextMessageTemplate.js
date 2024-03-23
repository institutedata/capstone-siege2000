const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TextMessageTemplate', {
    TextMessageTemplateID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TextMessageTemplateName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TextMessageTemplate: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TextMessageTemplateGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    TextMessageTemplateDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TextMessageTemplateRules: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tmtHotKey: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'TextMessageTemplate',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TextMessageTemplate",
        unique: true,
        fields: [
          { name: "TextMessageTemplateID" },
        ]
      },
      {
        name: "TextMessageTemplate$CacheLookup",
        fields: [
          { name: "TextMessageTemplateDateModified" },
          { name: "TextMessageTemplateGuid" },
        ]
      },
      {
        name: "TextMessageTemplate$TextMessageTemplateGuid",
        fields: [
          { name: "TextMessageTemplateGuid" },
        ]
      },
    ]
  });
};
