const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PersonManagementPlanFactors', {
    PersonManagmentPlanFactorID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pmfManagementPlanFactorID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pmfManagmentPlanID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ManagementPlans',
        key: 'ManagementPlanID'
      }
    },
    pmfPlanDetails: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pmfOptionTicked: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    PersonManagementPlanFactorsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PersonManagementPlanFactorsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PersonManagementPlanFactors',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PersonManagementPlanFactors$CacheLookup",
        fields: [
          { name: "PersonManagementPlanFactorsDateModified" },
          { name: "PersonManagementPlanFactorsGuid" },
        ]
      },
      {
        name: "PersonManagementPlanFactors$PersonManagementPlanFactorsGuid",
        fields: [
          { name: "PersonManagementPlanFactorsGuid" },
        ]
      },
      {
        name: "PK_PersonManagementPlanFactors",
        unique: true,
        fields: [
          { name: "PersonManagmentPlanFactorID" },
        ]
      },
    ]
  });
};
