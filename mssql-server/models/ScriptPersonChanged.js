const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ScriptPersonChanged', {
    ScriptPersonChangedID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    spcPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    spcScriptID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    spcStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    spcTimeSentToTestSafe: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ScriptPersonChangedGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ScriptPersonChangedDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    spcOldPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ScriptPersonChanged',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ScriptPersonChanged",
        unique: true,
        fields: [
          { name: "ScriptPersonChangedID" },
        ]
      },
      {
        name: "ScriptPersonChanged$CacheLookup",
        fields: [
          { name: "ScriptPersonChangedDateModified" },
          { name: "ScriptPersonChangedGuid" },
        ]
      },
      {
        name: "ScriptPersonChanged$ScriptPersonChangedGuid",
        fields: [
          { name: "ScriptPersonChangedGuid" },
        ]
      },
    ]
  });
};
