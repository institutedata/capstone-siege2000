const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Intervention', {
    InterventionID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ScriptID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Script',
        key: 'ScriptID'
      }
    },
    Reason: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Grade: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Time: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Comment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PrescriberContacted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    InterventionGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    InterventionDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Intervention',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Intervention$CacheLookup",
        fields: [
          { name: "InterventionDateModified" },
          { name: "InterventionGuid" },
        ]
      },
      {
        name: "Intervention$InterventionGuid",
        fields: [
          { name: "InterventionGuid" },
        ]
      },
      {
        name: "Intervention$InterventionID",
        fields: [
          { name: "InterventionID" },
        ]
      },
      {
        name: "Intervention$PrimaryKey",
        unique: true,
        fields: [
          { name: "InterventionID" },
        ]
      },
      {
        name: "Intervention$ScriptID",
        fields: [
          { name: "ScriptID" },
        ]
      },
    ]
  });
};
