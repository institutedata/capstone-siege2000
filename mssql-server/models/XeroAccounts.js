const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('XeroAccounts', {
    XeroAccountID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    XeroAccountType: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    GuidFromXeroSystem: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    XeroAccountsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    XeroAccountsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    xaStockLocationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'XeroAccounts',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_XeroAccounts",
        unique: true,
        fields: [
          { name: "XeroAccountID" },
        ]
      },
      {
        name: "XeroAccounts$CacheLookup",
        fields: [
          { name: "XeroAccountsDateModified" },
          { name: "XeroAccountsGuid" },
        ]
      },
      {
        name: "XeroAccounts$XeroAccountsGuid",
        fields: [
          { name: "XeroAccountsGuid" },
        ]
      },
    ]
  });
};
