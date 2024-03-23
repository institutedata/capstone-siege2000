const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DoseFrequency', {
    DoseFrequencyID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Sig: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Dose: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Frequency: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DoseFrequencyGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DoseFrequencyDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dfQuantityPerDay: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'DoseFrequency',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "DoseFrequency$CacheLookup",
        fields: [
          { name: "DoseFrequencyDateModified" },
          { name: "DoseFrequencyGuid" },
        ]
      },
      {
        name: "DoseFrequency$DoseFrequencyGuid",
        fields: [
          { name: "DoseFrequencyGuid" },
        ]
      },
      {
        name: "DoseFrequency$PrimaryKey",
        unique: true,
        fields: [
          { name: "DoseFrequencyID" },
        ]
      },
      {
        name: "SigIndex",
        fields: [
          { name: "Sig" },
        ]
      },
    ]
  });
};
