const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ScriptToPrivateInsurance', {
    ScriptToPrivateInsuranceID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    stpScriptID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Script',
        key: 'ScriptID'
      }
    },
    stpPrivateInsuranceSystemID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stpDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ScriptToPrivateInsuranceGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ScriptToPrivateInsuranceDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AmountClaimed: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    AmountPaid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    stpSouthernCrossID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'SouthernCross',
        key: 'SouthernCrossID'
      }
    },
    stpSaleItemID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'SaleItem',
        key: 'SaleItemID'
      }
    },
    stpSalePaymentID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'SalePayment',
        key: 'SalePaymentID'
      }
    },
    stpChemNumberID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'ChemNum',
        key: 'ChemNumID'
      }
    },
    ReferenceNumber: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    stpAccountToChargeToID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Account',
        key: 'AccountID'
      }
    }
  }, {
    sequelize,
    tableName: 'ScriptToPrivateInsurance',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ScriptToPrivateInsurance",
        unique: true,
        fields: [
          { name: "ScriptToPrivateInsuranceID" },
        ]
      },
      {
        name: "ScriptToPrivateInsurance$CacheLookup",
        fields: [
          { name: "ScriptToPrivateInsuranceDateModified" },
          { name: "ScriptToPrivateInsuranceGuid" },
        ]
      },
      {
        name: "ScriptToPrivateInsurance$ScriptID",
        fields: [
          { name: "stpScriptID" },
        ]
      },
      {
        name: "ScriptToPrivateInsurance$ScriptToPrivateInsuranceGuid",
        fields: [
          { name: "ScriptToPrivateInsuranceGuid" },
        ]
      },
      {
        name: "ScriptToPrivateInsurance$stpPrivateInsuranceSystemID",
        fields: [
          { name: "stpPrivateInsuranceSystemID" },
        ]
      },
    ]
  });
};
