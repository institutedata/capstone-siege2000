const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Epay', {
    EpayID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EPayName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ValuesAllowed: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    RechargeValuesAllowed: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EpayUpdateID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    TopUp: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    BalanceEnquiryAllowed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    RedeemAllowed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    epDateModified: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    ePayGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ePayDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LogoName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PinRequiredForRedeem: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    PinRequiredForBalance: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'Epay',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ePay$CacheLookup",
        fields: [
          { name: "ePayDateModified" },
          { name: "ePayGuid" },
        ]
      },
      {
        name: "ePay$ePayGuid",
        fields: [
          { name: "ePayGuid" },
        ]
      },
      {
        name: "Epay$EpayID",
        fields: [
          { name: "EpayID" },
        ]
      },
      {
        name: "Epay$EpayUpDateUD",
        fields: [
          { name: "EpayUpdateID" },
        ]
      },
      {
        name: "Epay$epDateModified",
        fields: [
          { name: "epDateModified" },
        ]
      },
      {
        name: "Epay$PrimaryKey",
        unique: true,
        fields: [
          { name: "EpayID" },
        ]
      },
    ]
  });
};
