const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AdditionalContact', {
    AdditionalContactID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    apPersonID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    apContactTypesID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'ContactTypes',
        key: 'ContactTypesID'
      }
    },
    AdditionalContactDetails: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AdditionalContactGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    AdditionalContactDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AdditionalContactFax: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AdditionalContactEmail: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AdditionalContactMobile: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    AdditionalContactPhone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AdditionalContactComments: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    apDoctorID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Doctor',
        key: 'DoctorID'
      }
    },
    apAccountID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Account',
        key: 'AccountID'
      }
    },
    apSupplierID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Supplier',
        key: 'SupplierID'
      }
    },
    apRestHomeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'RestHome',
        key: 'RestHomeID'
      }
    },
    apStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    apLinkedPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    HasContactPersmision: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    acRelationShipTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'AdditionalContactRelationShipType',
        key: 'AdditionalContactRelationShipTypeID'
      }
    }
  }, {
    sequelize,
    tableName: 'AdditionalContact',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "AdditionalContact$AdditionalContactGuid",
        fields: [
          { name: "AdditionalContactGuid" },
        ]
      },
      {
        name: "AdditionalContact$CacheLookup",
        fields: [
          { name: "AdditionalContactDateModified" },
          { name: "AdditionalContactGuid" },
        ]
      },
      {
        name: "PK_AdditionalContact",
        unique: true,
        fields: [
          { name: "AdditionalContactID" },
        ]
      },
    ]
  });
};
