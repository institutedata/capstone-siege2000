const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('eScriptCDA', {
    eScriptCDAID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    eScriptCDABarcode: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    eScriptCDA: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    eScriptCDAGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    eScriptCDADateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'eScriptCDA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "eScriptCDA$CacheLookup",
        fields: [
          { name: "eScriptCDADateModified" },
          { name: "eScriptCDAGuid" },
        ]
      },
      {
        name: "eScriptCDA$eScriptCDABarcode",
        unique: true,
        fields: [
          { name: "eScriptCDABarcode" },
        ]
      },
      {
        name: "eScriptCDA$eScriptCDAGuid",
        fields: [
          { name: "eScriptCDAGuid" },
        ]
      },
      {
        name: "PK_eScriptCDA",
        unique: true,
        fields: [
          { name: "eScriptCDAID" },
        ]
      },
    ]
  });
};
