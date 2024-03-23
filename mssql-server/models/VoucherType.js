const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VoucherType', {
    VoucherTypeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ExternalVoucher: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    VoucherType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RTFText: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ExpiryDays: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vtDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    VoucherTypeGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    VoucherTypeDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SingleUseVouchers: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    AskForVoucherNo: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    vtExternalPaymentTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VouchersRules: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'VoucherType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_VoucherType",
        unique: true,
        fields: [
          { name: "VoucherTypeID" },
        ]
      },
      {
        name: "VoucherType$CacheLookup",
        fields: [
          { name: "VoucherTypeDateModified" },
          { name: "VoucherTypeGuid" },
        ]
      },
      {
        name: "VoucherType$VoucherType",
        unique: true,
        fields: [
          { name: "VoucherType" },
        ]
      },
      {
        name: "VoucherType$VoucherTypeGuid",
        fields: [
          { name: "VoucherTypeGuid" },
        ]
      },
    ]
  });
};
