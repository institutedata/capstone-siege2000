const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EziblistDevices', {
    EziblistDevicesID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EziblistDeviceTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    edPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EziblistDeviceCode: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    EziblistDevicesGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    EziblistDevicesDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'EziblistDevices',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "EziblistDevices$CacheLookup",
        fields: [
          { name: "EziblistDevicesDateModified" },
          { name: "EziblistDevicesGuid" },
        ]
      },
      {
        name: "EziblistDevices$EziblistDevicesGuid",
        fields: [
          { name: "EziblistDevicesGuid" },
        ]
      },
      {
        name: "EziblistDevices$PrimaryKey",
        unique: true,
        fields: [
          { name: "EziblistDevicesID" },
        ]
      },
    ]
  });
};
