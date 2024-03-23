const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FormulationProcedures', {
    FormulationProceduresID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fpFormulationProcedureNameID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    fpFormulationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    FormulationProceduresOrder: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    FormulationProceduresGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FormulationProceduresDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'FormulationProcedures',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FormulationProcedures$CacheLookup",
        fields: [
          { name: "FormulationProceduresDateModified" },
          { name: "FormulationProceduresGuid" },
        ]
      },
      {
        name: "FormulationProcedures$FormulationProceduresGuid",
        fields: [
          { name: "FormulationProceduresGuid" },
        ]
      },
      {
        name: "FormulationProcedures$fpFormulationProcedureNameID_fpFormulationID",
        unique: true,
        fields: [
          { name: "fpFormulationProcedureNameID" },
          { name: "fpFormulationID" },
        ]
      },
      {
        name: "PK_FormulationProcedures",
        unique: true,
        fields: [
          { name: "FormulationProceduresID" },
        ]
      },
    ]
  });
};
