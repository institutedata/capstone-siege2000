const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PersonManagementPlanComments', {
    PersonManagmentPlanCommentsID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pmcPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    pmcPlanDetails: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pmcStaffInitial: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    pmcCommentDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PersonManagementPlanCommentsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PersonManagementPlanCommentsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PersonManagementPlanComments',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PersonManagementPlanComments$CacheLookup",
        fields: [
          { name: "PersonManagementPlanCommentsDateModified" },
          { name: "PersonManagementPlanCommentsGuid" },
        ]
      },
      {
        name: "PersonManagementPlanComments$PersonManagementPlanCommentsGuid",
        fields: [
          { name: "PersonManagementPlanCommentsGuid" },
        ]
      },
      {
        name: "PK_PersonManagementPlanComments",
        unique: true,
        fields: [
          { name: "PersonManagmentPlanCommentsID" },
        ]
      },
    ]
  });
};
