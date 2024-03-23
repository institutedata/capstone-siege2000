const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Delivery', {
    DeliveryID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DeliveryName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DeliveryGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DeliveryDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dsDeliveryProviderID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'DeliveryProvider',
        key: 'DeliveryProviderID'
      }
    },
    dsDeliveryPackagingID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'DeliveryPackaging',
        key: 'DeliveryPackagingID'
      }
    },
    dsDeliveryCommentID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'DeliveryComment',
        key: 'DeliveryCommentID'
      }
    },
    dsDeliveryPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    UseMainAddress: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    dsAdditionalAddressID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'AdditionalAddresses',
        key: 'AdditionalAddressesID'
      }
    },
    dsStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    dsDeliveryStatusID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'DeliveryStatus',
        key: 'DeliveryStatusID'
      }
    },
    DeliveryDateSent: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DeliveryProviderTrackingNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PackageHeight: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    PackageWeight: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    PackageDepth: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    PackageWidth: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    DeliveryPickedUpDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Delivery',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Delivery$CacheLookup",
        fields: [
          { name: "DeliveryDateModified" },
          { name: "DeliveryGuid" },
        ]
      },
      {
        name: "Delivery$DeliveryGuid",
        fields: [
          { name: "DeliveryGuid" },
        ]
      },
      {
        name: "PK_Delivery",
        unique: true,
        fields: [
          { name: "DeliveryID" },
        ]
      },
    ]
  });
};
