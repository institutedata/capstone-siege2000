const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VariableRepeats', {
    ScriptID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    VarQuantity: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    VarInstructions: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    VariableRepeatsGUID: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    VariableRepeatsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VariableDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'VariableRepeats',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "VariableRepeats$CacheLookup",
        fields: [
          { name: "VariableRepeatsDateModified" },
          { name: "VariableRepeatsGUID" },
        ]
      },
      {
        name: "VariableRepeats$PrimaryKey",
        unique: true,
        fields: [
          { name: "ScriptID" },
        ]
      },
      {
        name: "VariableRepeats$VariableRepeatsGUID",
        fields: [
          { name: "VariableRepeatsGUID" },
        ]
      },
      {
        name: "XVRGUID",
        fields: [
          { name: "VariableRepeatsGUID" },
        ]
      },
    ]
  });
};
