const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ExtraPaymentType', {
    ExtraPaymentTypeID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ExtraPaymentType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PaymentType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    epDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    epDateUpdated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ExtraPaymentTypeGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    eptVoucherTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'VoucherType',
        key: 'VoucherTypeID'
      }
    },
    eptXeroGuid: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ExtraPaymentType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ExtraPaymentType$ExtraPaymentTypeID",
        fields: [
          { name: "ExtraPaymentTypeID" },
        ]
      },
      {
        name: "ExtraPaymentType$PrimaryKey",
        unique: true,
        fields: [
          { name: "ExtraPaymentTypeID" },
        ]
      },
    ]
  });
};
