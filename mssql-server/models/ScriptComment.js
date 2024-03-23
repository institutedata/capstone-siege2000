const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ScriptComment', {
    ScriptCommentID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ScriptComment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ScriptCommentGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ScriptCommentDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ScriptComment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ScriptComment$CacheLookup",
        fields: [
          { name: "ScriptCommentDateModified" },
          { name: "ScriptCommentGuid" },
        ]
      },
      {
        name: "ScriptComment$PrimaryKey",
        unique: true,
        fields: [
          { name: "ScriptCommentID" },
        ]
      },
      {
        name: "ScriptComment$ScriptCommentGuid",
        fields: [
          { name: "ScriptCommentGuid" },
        ]
      },
    ]
  });
};
