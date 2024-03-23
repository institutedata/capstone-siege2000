const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NewFoil', {
    FoilID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    FoilPackID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'NewFoilPack',
        key: 'FoilPackID'
      }
    },
    FoilFrequency: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IsPRN: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    NonPack: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    FoilGUID: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    RotatingFoil: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    NewFoilGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    NewFoilDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NoOfDaysDispensed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NoOfDaysEntered: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HasPartTablet: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    foPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NoOfTablets: {
      type: DataTypes.REAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'NewFoil',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "NewFoil$CacheLookup",
        fields: [
          { name: "NewFoilDateModified" },
          { name: "NewFoilGuid" },
        ]
      },
      {
        name: "NewFoil$FoilGUID",
        fields: [
          { name: "FoilGUID" },
        ]
      },
      {
        name: "NewFoil$FoilID",
        fields: [
          { name: "FoilID" },
        ]
      },
      {
        name: "NewFoil$FoilPackID",
        fields: [
          { name: "FoilPackID" },
        ]
      },
      {
        name: "NewFoil$NewFoilGuid",
        fields: [
          { name: "NewFoilGuid" },
        ]
      },
      {
        name: "NewFoil$PrimaryKey",
        unique: true,
        fields: [
          { name: "FoilID" },
        ]
      },
    ]
  });
};
