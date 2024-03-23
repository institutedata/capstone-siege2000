const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DeliveryProvider', {
    DeliveryProviderID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DeliveryProviderName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DeliveryProviderGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DeliveryProviderDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dpActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    DeliveryProviderType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dpPreferred: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    NameInEcommerceSite: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DeliveryProvider',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "DeliveryProvider$CacheLookup",
        fields: [
          { name: "DeliveryProviderDateModified" },
          { name: "DeliveryProviderGuid" },
        ]
      },
      {
        name: "DeliveryProvider$DeliveryProvider",
        unique: true,
        fields: [
          { name: "DeliveryProviderName" },
        ]
      },
      {
        name: "DeliveryProvider$DeliveryProviderGuid",
        fields: [
          { name: "DeliveryProviderGuid" },
        ]
      },
      {
        name: "PK_DeliveryProvider",
        unique: true,
        fields: [
          { name: "DeliveryProviderID" },
        ]
      },
    ]
  });
};
