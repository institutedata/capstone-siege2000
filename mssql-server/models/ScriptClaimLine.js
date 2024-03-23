const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ScriptClaimLine', {
    ScriptClaimLineID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sclClaimID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Claim',
        key: 'ClaimID'
      }
    },
    sclScriptID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Script',
        key: 'ScriptID'
      }
    },
    ClaimLineType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ClaimLine: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ScriptClaimLineGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ScriptClaimLineDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ClaimLineNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sclCompoundedScriptIngredientID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'CompoundedScriptIngredient',
        key: 'CompoundedScriptIngredientID'
      }
    }
  }, {
    sequelize,
    tableName: 'ScriptClaimLine',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ScriptClaimLine",
        unique: true,
        fields: [
          { name: "ScriptClaimLineID" },
        ]
      },
      {
        name: "ScriptClaimLine$CacheLookup",
        fields: [
          { name: "ScriptClaimLineDateModified" },
          { name: "ScriptClaimLineGuid" },
        ]
      },
      {
        name: "ScriptClaimLine$ScriptClaimLineGuid",
        fields: [
          { name: "ScriptClaimLineGuid" },
        ]
      },
    ]
  });
};
