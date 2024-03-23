const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Scale', {
    ScaleID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ScaleName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ScaleGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ScaleDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ScaleConnectionDetails: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    scOtherDetails: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    scComputerConnectedToID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Computer',
        key: 'UnitID'
      }
    },
    ScaleTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    VariancePercent: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    VarianceGrams: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    VarianceMinGrams: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    scDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    scHasTare: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'Scale',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Scale$CacheLookup",
        fields: [
          { name: "ScaleDateModified" },
          { name: "ScaleGuid" },
        ]
      },
      {
        name: "Scale$PrimaryKey",
        unique: true,
        fields: [
          { name: "ScaleID" },
        ]
      },
      {
        name: "Scale$ScaleGuid",
        fields: [
          { name: "ScaleGuid" },
        ]
      },
    ]
  });
};
