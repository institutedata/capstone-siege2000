const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SignalRSite', {
    SignalRSiteID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SignalRSite: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    SignalRSiteGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SignalRSiteDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SignalRSiteDateCreated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SignalRSiteStatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    srMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SignalRSite',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SignalRSite$CacheLookup",
        fields: [
          { name: "SignalRSiteDateModified" },
          { name: "SignalRSiteGuid" },
        ]
      },
      {
        name: "SignalRSite$PrimaryKey",
        unique: true,
        fields: [
          { name: "SignalRSiteID" },
        ]
      },
      {
        name: "SignalRSite$SignalRSiteGuid",
        fields: [
          { name: "SignalRSiteGuid" },
        ]
      },
    ]
  });
};
