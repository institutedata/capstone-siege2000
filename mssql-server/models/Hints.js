const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Hints', {
    HintsID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    module: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    'Book Sort': {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Title: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Hint: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Action1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Action2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Action3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    HowCaption: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    HelpID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Advanced: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    UpdateHintsID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    HintsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    HintsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Hints',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Hints$CacheLookup",
        fields: [
          { name: "HintsDateModified" },
          { name: "HintsGuid" },
        ]
      },
      {
        name: "Hints$HelpID",
        fields: [
          { name: "HelpID" },
        ]
      },
      {
        name: "Hints$HintsGuid",
        fields: [
          { name: "HintsGuid" },
        ]
      },
      {
        name: "Hints$number",
        fields: [
          { name: "number" },
        ]
      },
      {
        name: "Hints$PrimaryKey",
        unique: true,
        fields: [
          { name: "HintsID" },
        ]
      },
      {
        name: "Hints$UpdateHintsID",
        fields: [
          { name: "UpdateHintsID" },
        ]
      },
    ]
  });
};
