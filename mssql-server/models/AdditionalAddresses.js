const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AdditionalAddresses', {
    AdditionalAddressesID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    aaPersonID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    aaAddressesTypesID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'AddressTypes',
        key: 'AddressTypesID'
      }
    },
    AdditionalAddressesDetails: {
      type: DataTypes.STRING(210),
      allowNull: true
    },
    AdditionalAddressesGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    AdditionalAddressesDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AdditionalAddressesSuburb: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AdditionalAddressesCity: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    AdditionalAddressesPostCode: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    aaDoctorID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Doctor',
        key: 'DoctorID'
      }
    },
    aaAccountID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Account',
        key: 'AccountID'
      }
    },
    aaSupplierID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Supplier',
        key: 'SupplierID'
      }
    },
    AdditionalAddressesUnitNumber: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    AdditionalAddressesStreetNumber: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    aaRestHomeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'RestHome',
        key: 'RestHomeID'
      }
    },
    aaStateID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    aaAddressVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    aaStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    aaDefaultAddress: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    aaAdditionalContactID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'AdditionalContact',
        key: 'AdditionalContactID'
      }
    }
  }, {
    sequelize,
    tableName: 'AdditionalAddresses',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "AdditionalAddresses$AdditionalAddressesGuid",
        fields: [
          { name: "AdditionalAddressesGuid" },
        ]
      },
      {
        name: "AdditionalAddresses$CacheLookup",
        fields: [
          { name: "AdditionalAddressesDateModified" },
          { name: "AdditionalAddressesGuid" },
        ]
      },
      {
        name: "PK_AdditionalAddresses",
        unique: true,
        fields: [
          { name: "AdditionalAddressesID" },
        ]
      },
    ]
  });
};
