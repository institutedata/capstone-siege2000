const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NewFoilFreq', {
    FoilID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Period: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    FoilFreq: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    FoilFreqGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    NewFoilFreqID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    NewFoilFreqGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    NewFoilFreqDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'NewFoilFreq',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "NewFoilFreq$CacheLookup",
        fields: [
          { name: "NewFoilFreqDateModified" },
          { name: "NewFoilFreqGuid" },
        ]
      },
      {
        name: "NewFoilFreq$FoilID",
        fields: [
          { name: "FoilID" },
        ]
      },
      {
        name: "NewFoilFreq$NewFoilFreqGuid",
        fields: [
          { name: "NewFoilFreqGuid" },
        ]
      },
      {
        name: "NewFoilFreq$Period",
        fields: [
          { name: "Period" },
        ]
      },
      {
        name: "NewFoilFreq$PrimaryKey",
        unique: true,
        fields: [
          { name: "FoilID" },
          { name: "Period" },
        ]
      },
    ]
  });
};
