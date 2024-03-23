const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Robot', {
    RobotID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RobotName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RobotAddress: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RobotStockLocationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    RobotGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    RobotDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AppName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    RobotType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    OutputFileLocation: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AdditionalRobotConfig: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RobotShortCode: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    robSignalRSiteID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'SignalRSite',
        key: 'SignalRSiteID'
      }
    },
    Deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'Robot',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Robot",
        unique: true,
        fields: [
          { name: "RobotID" },
        ]
      },
      {
        name: "Robot$CacheLookup",
        fields: [
          { name: "RobotDateModified" },
          { name: "RobotGuid" },
        ]
      },
      {
        name: "Robot$RobotGuid",
        fields: [
          { name: "RobotGuid" },
        ]
      },
    ]
  });
};
