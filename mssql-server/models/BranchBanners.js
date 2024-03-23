const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BranchBanners', {
    BranchBannerID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    BannerName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BranchBannersGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    BranchBannersDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'BranchBanners',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "BranchBanners$BannerName",
        fields: [
          { name: "BannerName" },
        ]
      },
      {
        name: "BranchBanners$BranchBannerID",
        fields: [
          { name: "BranchBannerID" },
        ]
      },
      {
        name: "BranchBanners$BranchBannersGuid",
        fields: [
          { name: "BranchBannersGuid" },
        ]
      },
      {
        name: "BranchBanners$CacheLookup",
        fields: [
          { name: "BranchBannersDateModified" },
          { name: "BranchBannersGuid" },
        ]
      },
      {
        name: "BranchBanners$PrimaryKey",
        unique: true,
        fields: [
          { name: "BranchBannerID" },
        ]
      },
    ]
  });
};
