const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PharmacyDepots', {
    PharmacyDepotsID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PharmacyDepotName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    PharmacyDepotDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PharmacyDepotGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    pdParentStoockLocationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PharmacyDepotHealthFacilityID: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    pdPrimaryDispensaryComputerID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Computer',
        key: 'UnitID'
      }
    },
    pdAccountID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Account',
        key: 'AccountID'
      }
    },
    pdDeliveryProviderID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'DeliveryProvider',
        key: 'DeliveryProviderID'
      }
    },
    pdDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    pdCode: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PharmacyDepots',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PharmacyDepots$PharmacyDepotsGuid",
        fields: [
          { name: "PharmacyDepotGuid" },
        ]
      },
      {
        name: "PharmacyDepots$PrimaryKey",
        unique: true,
        fields: [
          { name: "PharmacyDepotsID" },
        ]
      },
    ]
  });
};
