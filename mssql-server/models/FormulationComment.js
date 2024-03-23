const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FormulationComment', {
    FormulationCommentID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FormulationComment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FormulationCommentGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FormulationCommentDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'FormulationComment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FormulationComment$CacheLookup",
        fields: [
          { name: "FormulationCommentDateModified" },
          { name: "FormulationCommentGuid" },
        ]
      },
      {
        name: "FormulationComment$FormulationCommentGuid",
        fields: [
          { name: "FormulationCommentGuid" },
        ]
      },
      {
        name: "FormulationComment$PrimaryKey",
        unique: true,
        fields: [
          { name: "FormulationCommentID" },
        ]
      },
    ]
  });
};
