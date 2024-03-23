const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Formulation', {
    FormulationID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Quantity: {
      type: DataTypes.REAL,
      allowNull: true
    },
    CompoundWastageAllowance: {
      type: DataTypes.REAL,
      allowNull: true
    },
    CompoundForm: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CompoundFormID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'StockForm',
        key: 'FormID'
      }
    },
    Capsule: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    CapsuleSize: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    ExcludeQuantity: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    FormulationGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FormulationDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HOFormulationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DefaultPriceOptionID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'CompoundPriceOptions',
        key: 'PriceOptionID'
      }
    },
    CalculateBaseManually: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    StandardNoOfContainers: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    LabelDescription: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    UseFormulationDescriptionAsLabel: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    StandardExpiryDays: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ConversionID: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    foFormaulationCommentID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'FormulationComment',
        key: 'FormulationCommentID'
      }
    },
    Sterile: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ftNonPrintableDisplayDetails: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ftStrength: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    foCreaterStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    foCheckerStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    }
  }, {
    sequelize,
    tableName: 'Formulation',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Formulation$CacheLookup",
        fields: [
          { name: "FormulationDateModified" },
          { name: "FormulationGuid" },
        ]
      },
      {
        name: "Formulation$CompoundFormID",
        fields: [
          { name: "CompoundFormID" },
        ]
      },
      {
        name: "Formulation$Description",
        fields: [
          { name: "Description" },
        ]
      },
      {
        name: "Formulation$FormulationGuid",
        fields: [
          { name: "FormulationGuid" },
        ]
      },
      {
        name: "Formulation$FormulationID",
        unique: true,
        fields: [
          { name: "FormulationID" },
        ]
      },
    ]
  });
};
