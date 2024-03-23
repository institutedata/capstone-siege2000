const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FormulationToSOP', {
    FormulationToSOPID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ftsFormulationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ftsSOPID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    FormulationToSOPGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FormulationToSOPDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ftsStartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ftsEndDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'FormulationToSOP',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FormulationToSOP$CacheLookup",
        fields: [
          { name: "FormulationToSOPDateModified" },
          { name: "FormulationToSOPGuid" },
        ]
      },
      {
        name: "FormulationToSOP$FormulationToSOPGuid",
        fields: [
          { name: "FormulationToSOPGuid" },
        ]
      },
      {
        name: "PK_FormulationToSOP",
        unique: true,
        fields: [
          { name: "FormulationToSOPID" },
        ]
      },
    ]
  });
};
