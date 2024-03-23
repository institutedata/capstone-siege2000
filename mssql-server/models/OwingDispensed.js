const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OwingDispensed', {
    OwingDispensedID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    odScriptID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Script',
        key: 'ScriptID'
      }
    },
    odDateDispensed: {
      type: DataTypes.DATE,
      allowNull: true
    },
    odQtyDispensed: {
      type: DataTypes.REAL,
      allowNull: true
    },
    OwingDispensedGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    OwingDispensedDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    odStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    odClaimID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Claim',
        key: 'ClaimID'
      }
    },
    odTimeSentToTestSafe: {
      type: DataTypes.DATE,
      allowNull: true
    },
    odSaleID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Sales',
        key: 'SaleID'
      }
    },
    odPickedUpDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'OwingDispensed',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "OwingDispensed$CacheLookup",
        fields: [
          { name: "OwingDispensedDateModified" },
          { name: "OwingDispensedGuid" },
        ]
      },
      {
        name: "OwingDispensed$OwingDispensedGuid",
        fields: [
          { name: "OwingDispensedGuid" },
        ]
      },
      {
        name: "PK_OwingDispensed",
        unique: true,
        fields: [
          { name: "OwingDispensedID" },
        ]
      },
    ]
  });
};
