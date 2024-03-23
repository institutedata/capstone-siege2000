const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ScriptToKioskScript', {
    ScriptToKioskScriptID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    stkScriptID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Script',
        key: 'ScriptID'
      }
    },
    stkKioskScriptID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'KioskScripts',
        key: 'KioskScriptsID'
      }
    },
    stkKioskScriptBasketID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'KioskScriptBasket',
        key: 'KioskScriptBasketID'
      }
    },
    stkDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ScriptToKioskScriptGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ScriptToKioskScriptDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ScriptToKioskScript',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ScriptToKioskScript",
        unique: true,
        fields: [
          { name: "ScriptToKioskScriptID" },
        ]
      },
      {
        name: "ScriptToKioskScript$CacheLookup",
        fields: [
          { name: "ScriptToKioskScriptDateModified" },
          { name: "ScriptToKioskScriptGuid" },
        ]
      },
      {
        name: "ScriptToKioskScript$ScriptToKioskScriptGuid",
        fields: [
          { name: "ScriptToKioskScriptGuid" },
        ]
      },
    ]
  });
};
