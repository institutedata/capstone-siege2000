const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PersonManagementPlanActions', {
    PersonManagmentPlanActionID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pmpManagementPlanActionID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pmpManagmentPlanID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ManagementPlans',
        key: 'ManagementPlanID'
      }
    },
    PlanDetails: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OptionTicked: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    PersonManagementPlanActionsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PersonManagementPlanActionsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PersonManagementPlanActions',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PersonManagementPlanActions$CacheLookup",
        fields: [
          { name: "PersonManagementPlanActionsDateModified" },
          { name: "PersonManagementPlanActionsGuid" },
        ]
      },
      {
        name: "PersonManagementPlanActions$PersonManagementPlanActionsGuid",
        fields: [
          { name: "PersonManagementPlanActionsGuid" },
        ]
      },
      {
        name: "PK_PersonManagementPlanActions",
        unique: true,
        fields: [
          { name: "PersonManagmentPlanActionID" },
        ]
      },
    ]
  });
};
