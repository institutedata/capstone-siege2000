const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AvaliableCurrency', {
    AvaliableCurrencyID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ValueInCents: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    AvaliableCurrencyGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    AvaliableCurrencyDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    acMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'AvaliableCurrency',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "AvaliableCurrency$AvaliableCurrency",
        unique: true,
        fields: [
          { name: "ValueInCents" },
        ]
      },
      {
        name: "AvaliableCurrency$AvaliableCurrencyGuid",
        fields: [
          { name: "AvaliableCurrencyGuid" },
        ]
      },
      {
        name: "AvaliableCurrency$CacheLookup",
        fields: [
          { name: "AvaliableCurrencyDateModified" },
          { name: "AvaliableCurrencyGuid" },
        ]
      },
      {
        name: "PK_AvaliableCurrency",
        unique: true,
        fields: [
          { name: "AvaliableCurrencyID" },
        ]
      },
    ]
  });
};
