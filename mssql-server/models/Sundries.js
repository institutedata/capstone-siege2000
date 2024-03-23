const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Sundries', {
    PriceOptionID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Description: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    DispensingFee: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DisplayOnReceipt: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    IsExtraFee: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ChargeOnRepeats: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    GetSerialNumber: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sunAccountID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Account',
        key: 'AccountID'
      }
    },
    DontAllowEditing: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    SundriesGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SundriesDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Sundries',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Sundries$CacheLookup",
        fields: [
          { name: "SundriesDateModified" },
          { name: "SundriesGuid" },
        ]
      },
      {
        name: "Sundries$Description",
        unique: true,
        fields: [
          { name: "PriceOptionID" },
        ]
      },
      {
        name: "Sundries$PrimaryKey",
        unique: true,
        fields: [
          { name: "PriceOptionID" },
        ]
      },
      {
        name: "Sundries$SundriesGuid",
        fields: [
          { name: "SundriesGuid" },
        ]
      },
    ]
  });
};
