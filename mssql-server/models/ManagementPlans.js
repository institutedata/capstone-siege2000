const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ManagementPlans', {
    ManagementPlanID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mpPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    TimePlanCreated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SentToMOH: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    PlanComplete: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ManagementPlansGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ManagementPlansDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    mpContractID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ManagementPlans',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ManagementPlans$CacheLookup",
        fields: [
          { name: "ManagementPlansDateModified" },
          { name: "ManagementPlansGuid" },
        ]
      },
      {
        name: "ManagementPlans$ManagementPlansGuid",
        fields: [
          { name: "ManagementPlansGuid" },
        ]
      },
      {
        name: "ManagementPlans$mpPersonID",
        fields: [
          { name: "mpPersonID" },
        ]
      },
      {
        name: "PK_ManagmentPlans",
        unique: true,
        fields: [
          { name: "ManagementPlanID" },
        ]
      },
    ]
  });
};
