const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ScriptContainerCount', {
    ScriptContainerCountID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sccScriptID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Script',
        key: 'ScriptID'
      }
    },
    sccQuantity: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    sccDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ScriptContainerCountGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ScriptContainerCountDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ScriptContainerCount',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ScriptContainerCount",
        unique: true,
        fields: [
          { name: "ScriptContainerCountID" },
        ]
      },
    ]
  });
};
