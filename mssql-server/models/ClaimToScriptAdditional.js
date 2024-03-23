const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ClaimToScriptAdditional', {
    ClaimToScriptAdditionalID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    csaScriptAdditionalPaymentID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ScriptAdditionalPayments',
        key: 'ScriptAdditionalPaymentsID'
      }
    },
    csaClaimID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Claim',
        key: 'ClaimID'
      }
    },
    ClaimToScriptAdditionalGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ClaimToScriptAdditionalDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    csaClaimType: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ClaimToScriptAdditional',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ClaimToScriptAdditional$CacheLookup",
        fields: [
          { name: "ClaimToScriptAdditionalDateModified" },
          { name: "ClaimToScriptAdditionalGuid" },
        ]
      },
      {
        name: "ClaimToScriptAdditional$ClaimToScriptAdditionalGuid",
        fields: [
          { name: "ClaimToScriptAdditionalGuid" },
        ]
      },
      {
        name: "ClaimToScriptAdditional_UniqueKey",
        unique: true,
        fields: [
          { name: "csaClaimID" },
          { name: "csaScriptAdditionalPaymentID" },
          { name: "csaClaimType" },
        ]
      },
      {
        name: "PK_ClaimToScriptAdditional",
        unique: true,
        fields: [
          { name: "ClaimToScriptAdditionalID" },
        ]
      },
    ]
  });
};
