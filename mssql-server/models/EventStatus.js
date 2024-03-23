const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EventStatus', {
    EventStatusID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EventStatus: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EventStatusGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    EventStatusDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EventStatusDateCreated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    esMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    PromptUser: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ShowOnMainScreen: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'EventStatus',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "EventStatus$CacheLookup",
        fields: [
          { name: "EventStatusDateModified" },
          { name: "EventStatusGuid" },
        ]
      },
      {
        name: "EventStatus$EventStatusGuid",
        fields: [
          { name: "EventStatusGuid" },
        ]
      },
      {
        name: "EventStatus$PrimaryKey",
        unique: true,
        fields: [
          { name: "EventStatusID" },
        ]
      },
    ]
  });
};
