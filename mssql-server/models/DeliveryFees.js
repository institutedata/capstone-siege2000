const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DeliveryFees', {
    DeliveryFeesID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dfSundryID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    StartPartcode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    EndPartcode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dfDeliveryPackagingID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'DeliveryPackaging',
        key: 'DeliveryPackagingID'
      }
    },
    dfDeliveryProviderID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'DeliveryProvider',
        key: 'DeliveryProviderID'
      }
    },
    DeliveryFee: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DeliveryFeesGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DeliveryFeesDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DeliveryFees',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "DeliveryFees$CacheLookup",
        fields: [
          { name: "DeliveryFeesDateModified" },
          { name: "DeliveryFeesGuid" },
        ]
      },
      {
        name: "DeliveryFees$DeliveryFeesGuid",
        fields: [
          { name: "DeliveryFeesGuid" },
        ]
      },
      {
        name: "DeliveryFees$PrimaryKey",
        unique: true,
        fields: [
          { name: "DeliveryFeesID" },
        ]
      },
    ]
  });
};
