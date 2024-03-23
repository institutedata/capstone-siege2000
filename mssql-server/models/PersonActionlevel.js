const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PersonActionlevel', {
    PersonActionLevelID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    palClubID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    palPersonID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    palActionLevel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PersonActionLevelGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PersonActionLevelDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PersonActionlevel',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PersonActionLevel$CacheLookup",
        fields: [
          { name: "PersonActionLevelDateModified" },
          { name: "PersonActionLevelGuid" },
        ]
      },
      {
        name: "PersonActionLevel$ClubPerson",
        unique: true,
        fields: [
          { name: "palClubID" },
          { name: "palPersonID" },
        ]
      },
      {
        name: "PersonActionLevel$PersonActionLevelGuid",
        fields: [
          { name: "PersonActionLevelGuid" },
        ]
      },
      {
        name: "PK_PersonActionlevel",
        unique: true,
        fields: [
          { name: "PersonActionLevelID" },
        ]
      },
    ]
  });
};
