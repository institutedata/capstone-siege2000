const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FormulationIngredient', {
    FormulationIngredientID: {
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
    StockID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Stock',
        key: 'StockID'
      }
    },
    GenericFlag: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Quantity: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Device: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Base: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    FormulationIngredientGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FormulationIngredientDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UnitTypeID: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ChildFormulationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fiDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    fiStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    ConversionID: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FormulationIngredientDateCreated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fiAddedAfterInitilize: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    fiIngredientOrder: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fiIngredientStrength: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    fiIngredientPercentage: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    fiConvertToWeight: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    fiQS: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    fiMinimumExpiryDays: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fiAdditionalInfo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fiConvertedWeight: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    fiAddedAfterInitialSave: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    fiIDOfIngredientItReplaces: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'FormulationIngredient',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FormulationIngredient$CacheLookup",
        fields: [
          { name: "FormulationIngredientDateModified" },
          { name: "FormulationIngredientGuid" },
        ]
      },
      {
        name: "FormulationIngredient$FormulationID",
        fields: [
          { name: "FormulationID" },
        ]
      },
      {
        name: "FormulationIngredient$FormulationIngredientGuid",
        fields: [
          { name: "FormulationIngredientGuid" },
        ]
      },
      {
        name: "FormulationIngredient$FormulationIngredientID",
        unique: true,
        fields: [
          { name: "FormulationIngredientID" },
        ]
      },
      {
        name: "FormulationIngredient$StockID",
        fields: [
          { name: "StockID" },
        ]
      },
    ]
  });
};
