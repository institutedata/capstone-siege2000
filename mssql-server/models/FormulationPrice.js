const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FormulationPrice', {
    PriceID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FormulationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Formulation',
        key: 'FormulationID'
      }
    },
    Quantity: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Price: {
      type: DataTypes.REAL,
      allowNull: true
    },
    FormulationPriceGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FormulationPriceDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'FormulationPrice',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FormulationPrice$CacheLookup",
        fields: [
          { name: "FormulationPriceDateModified" },
          { name: "FormulationPriceGuid" },
        ]
      },
      {
        name: "FormulationPrice$FormulationPriceGuid",
        fields: [
          { name: "FormulationPriceGuid" },
        ]
      },
      {
        name: "FormulationPrice$PriceID",
        unique: true,
        fields: [
          { name: "PriceID" },
        ]
      },
    ]
  });
};
