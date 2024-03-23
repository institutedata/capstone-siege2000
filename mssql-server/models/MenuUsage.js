const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MenuUsage', {
    MenuUsageID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    muComputerID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    muStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Menu: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MenuNumber: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    NoOfTimesUsed: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    MenuUsageGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    MenuUsageDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PinToStart: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    DoNotDisplay: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'MenuUsage',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "MenuUsage$CacheLookup",
        fields: [
          { name: "MenuUsageDateModified" },
          { name: "MenuUsageGuid" },
        ]
      },
      {
        name: "MenuUsage$MenuUsageGuid",
        fields: [
          { name: "MenuUsageGuid" },
        ]
      },
      {
        name: "PK_MenuUsage",
        unique: true,
        fields: [
          { name: "MenuUsageID" },
        ]
      },
    ]
  });
};
