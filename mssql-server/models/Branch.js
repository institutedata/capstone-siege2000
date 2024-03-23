const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Branch', {
    BranchID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    BranchName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RegionID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'BranchRegions',
        key: 'BranchRegionID'
      }
    },
    BannerID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'BranchBanners',
        key: 'BranchBannerID'
      }
    },
    brHOGroupID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DirectAccess: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    BranchGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    BranchDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Branch',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Branch$BannerID",
        fields: [
          { name: "BannerID" },
        ]
      },
      {
        name: "Branch$BranchGuid",
        fields: [
          { name: "BranchGuid" },
        ]
      },
      {
        name: "Branch$BranchID",
        fields: [
          { name: "BranchID" },
        ]
      },
      {
        name: "Branch$CacheLookup",
        fields: [
          { name: "BranchDateModified" },
          { name: "BranchGuid" },
        ]
      },
      {
        name: "Branch$PrimaryKey",
        unique: true,
        fields: [
          { name: "BranchID" },
        ]
      },
      {
        name: "Branch$RegionID",
        fields: [
          { name: "RegionID" },
        ]
      },
    ]
  });
};
