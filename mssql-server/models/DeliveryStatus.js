const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DeliveryStatus', {
    DeliveryStatusID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DeliveryStatusName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DeliveryStatusGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DeliveryStatusDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dsMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'DeliveryStatus',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "DeliveryStatus$CacheLookup",
        fields: [
          { name: "DeliveryStatusDateModified" },
          { name: "DeliveryStatusGuid" },
        ]
      },
      {
        name: "DeliveryStatus$DeliveryStatus",
        unique: true,
        fields: [
          { name: "DeliveryStatusName" },
        ]
      },
      {
        name: "DeliveryStatus$DeliveryStatusGuid",
        fields: [
          { name: "DeliveryStatusGuid" },
        ]
      },
      {
        name: "PK_DeliveryStatus",
        unique: true,
        fields: [
          { name: "DeliveryStatusID" },
        ]
      },
    ]
  });
};
