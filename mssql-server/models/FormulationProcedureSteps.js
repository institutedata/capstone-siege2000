const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FormulationProcedureSteps', {
    FormulationProcedureStepsID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    fpsFormulationProcedureNameID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    FormulationProcedureStepsOrder: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    FormulationProcedureStepsDetails: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FormulationProcedureStepsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FormulationProcedureStepsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fpsMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    HOProcedureStepID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'FormulationProcedureSteps',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FormulationProcedureSteps$CacheLookup",
        fields: [
          { name: "FormulationProcedureStepsDateModified" },
          { name: "FormulationProcedureStepsGuid" },
        ]
      },
      {
        name: "FormulationProcedureSteps$FormulationProcedureStepsGuid",
        fields: [
          { name: "FormulationProcedureStepsGuid" },
        ]
      },
      {
        name: "PK_FormulationProcedureSteps",
        unique: true,
        fields: [
          { name: "fpsFormulationProcedureNameID" },
          { name: "FormulationProcedureStepsOrder" },
        ]
      },
    ]
  });
};
