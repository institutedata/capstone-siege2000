const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Contract', {
    ContractID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ContractNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ContractGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ContractDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ContractName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ContractCutOffDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ReplacementContractID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DateReplacementContractStarts: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ContractDateCreated: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Contract',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Contract$CacheLookup",
        fields: [
          { name: "ContractDateModified" },
          { name: "ContractGuid" },
        ]
      },
      {
        name: "Contract$ContractGuid",
        fields: [
          { name: "ContractGuid" },
        ]
      },
      {
        name: "Contract$ContractNumber",
        unique: true,
        fields: [
          { name: "ContractNumber" },
        ]
      },
      {
        name: "PK_Contract",
        unique: true,
        fields: [
          { name: "ContractID" },
        ]
      },
    ]
  });
};
