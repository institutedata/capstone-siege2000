const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FormulationProcedureName', {
    FormulationProcedureNameID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    FormulationProcedureNameName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    FormulationProcedureNameGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FormulationProcedureNameDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fpnMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    HOProcedureID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'FormulationProcedureName',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FormulationProcedureName$CacheLookup",
        fields: [
          { name: "FormulationProcedureNameDateModified" },
          { name: "FormulationProcedureNameGuid" },
        ]
      },
      {
        name: "FormulationProcedureName$FormulationProcedureName",
        unique: true,
        fields: [
          { name: "FormulationProcedureNameName" },
        ]
      },
      {
        name: "FormulationProcedureName$FormulationProcedureNameGuid",
        fields: [
          { name: "FormulationProcedureNameGuid" },
        ]
      },
      {
        name: "PK_FormulationProcedureName",
        unique: true,
        fields: [
          { name: "FormulationProcedureNameID" },
        ]
      },
    ]
  });
};
