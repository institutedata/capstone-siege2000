const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BranchRegions', {
    BranchRegionID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    RegionName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BranchRegionsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    BranchRegionsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'BranchRegions',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "BranchRegions$BranchRegionID",
        fields: [
          { name: "BranchRegionID" },
        ]
      },
      {
        name: "BranchRegions$BranchRegionsGuid",
        fields: [
          { name: "BranchRegionsGuid" },
        ]
      },
      {
        name: "BranchRegions$CacheLookup",
        fields: [
          { name: "BranchRegionsDateModified" },
          { name: "BranchRegionsGuid" },
        ]
      },
      {
        name: "BranchRegions$PrimaryKey",
        unique: true,
        fields: [
          { name: "BranchRegionID" },
        ]
      },
      {
        name: "BranchRegions$RegionName",
        fields: [
          { name: "RegionName" },
        ]
      },
    ]
  });
};
