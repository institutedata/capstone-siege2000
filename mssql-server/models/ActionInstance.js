const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ActionInstance', {
    ActionInstanceID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ActionID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    ActionDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LifetimeDollars: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    LifetimeUnits: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    CurrentDollars: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CurrentUnits: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    ClubID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'Club',
        key: 'ClubID'
      }
    },
    ZeroingBalance: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ActionInstanceGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ActionInstanceDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ActionInstance',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ActionInstance$ActionDate",
        fields: [
          { name: "ActionDate" },
        ]
      },
      {
        name: "ActionInstance$ActionID",
        fields: [
          { name: "ActionID" },
        ]
      },
      {
        name: "ActionInstance$ActionInstanceGuid",
        fields: [
          { name: "ActionInstanceGuid" },
        ]
      },
      {
        name: "ActionInstance$ActionInstanceID",
        unique: true,
        fields: [
          { name: "ActionInstanceID" },
        ]
      },
      {
        name: "ActionInstance$CacheLookup",
        fields: [
          { name: "ActionInstanceDateModified" },
          { name: "ActionInstanceGuid" },
        ]
      },
      {
        name: "ActionInstance$ClubID",
        fields: [
          { name: "ClubID" },
        ]
      },
      {
        name: "ActionInstance$PersonID",
        fields: [
          { name: "PersonID" },
        ]
      },
      {
        name: "ActionInstance$PrimaryKey",
        unique: true,
        fields: [
          { name: "ActionInstanceID" },
        ]
      },
    ]
  });
};
