const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FormulationToInternetTags', {
    FormulationToInternetTagsID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fitInternetTagID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'InternetTag',
        key: 'InternetTagID'
      }
    },
    fitFormulationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'Formulation',
        key: 'FormulationID'
      }
    },
    FormulationToInternetTagsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FormulationToInternetTagsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'FormulationToInternetTags',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FormulationToInternetTags$CacheLookup",
        fields: [
          { name: "FormulationToInternetTagsDateModified" },
          { name: "FormulationToInternetTagsGuid" },
        ]
      },
      {
        name: "FormulationToInternetTags$FormulationToInternetTagsGuid",
        fields: [
          { name: "FormulationToInternetTagsGuid" },
        ]
      },
      {
        name: "PK_FormulationToInternetTags",
        unique: true,
        fields: [
          { name: "FormulationToInternetTagsID" },
        ]
      },
    ]
  });
};
