const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ScriptToTaxType', {
    ScriptToTaxTypeID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    scttScriptID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'Script',
        key: 'ScriptID'
      }
    },
    scttTaxTypeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    scttTaxValue: {
      type: DataTypes.REAL,
      allowNull: false,
      defaultValue: 0
    },
    ScriptToTaxTypeGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ScriptToTaxTypeDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sttTaxInCents: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ScriptToTaxType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ScriptToTaxType",
        unique: true,
        fields: [
          { name: "ScriptToTaxTypeID" },
        ]
      },
      {
        name: "ScriptToTaxType$CacheLookup",
        fields: [
          { name: "ScriptToTaxTypeDateModified" },
          { name: "ScriptToTaxTypeGuid" },
        ]
      },
      {
        name: "ScriptToTaxType$ScriptToTaxTypeGuid",
        fields: [
          { name: "ScriptToTaxTypeGuid" },
        ]
      },
    ]
  });
};
