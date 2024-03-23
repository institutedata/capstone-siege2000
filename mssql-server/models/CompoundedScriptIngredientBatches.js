const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CompoundedScriptIngredientBatches', {
    CompoundedScriptIngredientBatchesID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    csiCompoundedScriptIngredientID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'CompoundedScriptIngredient',
        key: 'CompoundedScriptIngredientID'
      }
    },
    csiStockBatchID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    QuantityUsed: {
      type: DataTypes.REAL,
      allowNull: true
    },
    HasExpiredComponent: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    IsSubBatch: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    CompoundedScriptIngredientBatchesGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    CompoundedScriptIngredientBatchesDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    csiDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    csiBarcodeChecked: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    csibAdditionalInfo: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CompoundedScriptIngredientBatches',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "CompoundedScriptIngredientBatches$CacheLookup",
        fields: [
          { name: "CompoundedScriptIngredientBatchesDateModified" },
          { name: "CompoundedScriptIngredientBatchesGuid" },
        ]
      },
      {
        name: "CompoundedScriptIngredientBatches$CompoundedScriptIngredientBatchesGuid",
        fields: [
          { name: "CompoundedScriptIngredientBatchesGuid" },
        ]
      },
      {
        name: "CompoundedScriptIngredientBatches$CompoundedScriptIngredientBatchesID",
        unique: true,
        fields: [
          { name: "CompoundedScriptIngredientBatchesID" },
        ]
      },
      {
        name: "CompoundedScriptIngredientBatches$csiCompoundedScriptIngredientID",
        fields: [
          { name: "csiCompoundedScriptIngredientID" },
        ]
      },
      {
        name: "CompoundedScriptIngredientBatches$csiStockBatchID",
        fields: [
          { name: "csiStockBatchID" },
        ]
      },
    ]
  });
};
