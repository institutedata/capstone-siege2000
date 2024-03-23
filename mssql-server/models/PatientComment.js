const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PatientComment', {
    PatientCommentID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PatientComment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PatientCommentGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PatientCommentDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PatientComment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PatientComment$CacheLookup",
        fields: [
          { name: "PatientCommentDateModified" },
          { name: "PatientCommentGuid" },
        ]
      },
      {
        name: "PatientComment$PatientCommentGuid",
        fields: [
          { name: "PatientCommentGuid" },
        ]
      },
      {
        name: "PatientComment$PrimaryKey",
        unique: true,
        fields: [
          { name: "PatientCommentID" },
        ]
      },
    ]
  });
};
