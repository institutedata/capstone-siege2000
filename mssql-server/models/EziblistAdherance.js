const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EziblistAdherance', {
    EziblistAdheranceID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    eaEziblistDevicesID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'EziblistDevices',
        key: 'EziblistDevicesID'
      }
    },
    edPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    FirstWarning: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    SecondWarning: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    PillTaken: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DateOfMessage: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TheDay: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ThePeriod: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    EziblistAdheranceGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    EziblistAdheranceDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'EziblistAdherance',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "EziblistAdherance$CacheLookup",
        fields: [
          { name: "EziblistAdheranceDateModified" },
          { name: "EziblistAdheranceGuid" },
        ]
      },
      {
        name: "EziblistAdherance$EziblistAdheranceGuid",
        fields: [
          { name: "EziblistAdheranceGuid" },
        ]
      },
      {
        name: "EziblistAdherance$PrimaryKey",
        unique: true,
        fields: [
          { name: "EziblistAdheranceID" },
        ]
      },
    ]
  });
};
