const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EftposUnits', {
    EftposUnitID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EftPOSUnitName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EftPOSUnitIP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EftPOSUnitPort: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    euDateCreated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    euDateUpdated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EftposUnitsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'EftposUnits',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "EftposUnits$CacheLookup",
        fields: [
          { name: "euDateUpdated" },
          { name: "EftposUnitsGuid" },
        ]
      },
      {
        name: "EftposUnits$EftposUnitsGuid",
        fields: [
          { name: "EftposUnitsGuid" },
        ]
      },
      {
        name: "PK_EftposUnits",
        unique: true,
        fields: [
          { name: "EftposUnitID" },
        ]
      },
    ]
  });
};
