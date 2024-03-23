const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LTCAssessments', {
    LTCAssessmentID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LTCAssessmentDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Score: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LTCData: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SentToServer: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    LTCPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    LTCAssessmentsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    LTCAssessmentsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CompleteAssessment: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'LTCAssessments',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "LTCAssessments$CacheLookup",
        fields: [
          { name: "LTCAssessmentsDateModified" },
          { name: "LTCAssessmentsGuid" },
        ]
      },
      {
        name: "LTCAssessments$Lookup",
        fields: [
          { name: "LTCAssessmentDate" },
          { name: "LTCPersonID" },
        ]
      },
      {
        name: "LTCAssessments$LTCAssessmentsGuid",
        fields: [
          { name: "LTCAssessmentsGuid" },
        ]
      },
      {
        name: "LTCAssessments$LTCPersonID",
        fields: [
          { name: "LTCPersonID" },
        ]
      },
      {
        name: "PK_LTCAssessments",
        unique: true,
        fields: [
          { name: "LTCAssessmentID" },
        ]
      },
    ]
  });
};
