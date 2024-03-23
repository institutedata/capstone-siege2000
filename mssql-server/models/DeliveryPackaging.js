const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DeliveryPackaging', {
    DeliveryPackagingID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DeliveryPackagingName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DeliveryPackagingGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DeliveryPackagingDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pacMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    MaximumWidth: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    MaximumHeight: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    MaximumWeight: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    MaximumDepth: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    ProviderCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dpDeliveryProviderID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'DeliveryProvider',
        key: 'DeliveryProviderID'
      }
    },
    DeliveryPackagingType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    AdditionalProviderCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pacPreferred: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'DeliveryPackaging',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "DeliveryPackaging$CacheLookup",
        fields: [
          { name: "DeliveryPackagingDateModified" },
          { name: "DeliveryPackagingGuid" },
        ]
      },
      {
        name: "DeliveryPackaging$DeliveryPackaging",
        unique: true,
        fields: [
          { name: "DeliveryPackagingName" },
        ]
      },
      {
        name: "DeliveryPackaging$DeliveryPackagingGuid",
        fields: [
          { name: "DeliveryPackagingGuid" },
        ]
      },
      {
        name: "PK_DeliveryPackaging",
        unique: true,
        fields: [
          { name: "DeliveryPackagingID" },
        ]
      },
    ]
  });
};
