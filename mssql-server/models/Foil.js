const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Foil', {
    FoilID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    FoilFrequency: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Periods: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PackType: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Monthly: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    StartDay: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    StartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    StopDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    StartDates: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FoilGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FoilDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Foil',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Foil$CacheLookup",
        fields: [
          { name: "FoilDateModified" },
          { name: "FoilGuid" },
        ]
      },
      {
        name: "Foil$FoilGuid",
        fields: [
          { name: "FoilGuid" },
        ]
      },
      {
        name: "Foil$FoilID",
        fields: [
          { name: "FoilID" },
        ]
      },
      {
        name: "Foil$PrimaryKey",
        unique: true,
        fields: [
          { name: "FoilID" },
        ]
      },
    ]
  });
};
