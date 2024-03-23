const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GlobalToTaxType', {
    GlobalToTaxTypeID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    gttTaxTypeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    gttTaxValue: {
      type: DataTypes.REAL,
      allowNull: false,
      defaultValue: 0
    },
    GlobalToTaxTypeGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    GlobalToTaxTypeDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gttTaxModifierID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    gttStartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gttEndDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gttMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'GlobalToTaxType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GlobalToTaxType$CacheLookup",
        fields: [
          { name: "GlobalToTaxTypeDateModified" },
          { name: "GlobalToTaxTypeGuid" },
        ]
      },
      {
        name: "GlobalToTaxType$GlobalToTaxTypeGuid",
        fields: [
          { name: "GlobalToTaxTypeGuid" },
        ]
      },
      {
        name: "PK_GlobalToTaxType",
        unique: true,
        fields: [
          { name: "GlobalToTaxTypeID" },
        ]
      },
    ]
  });
};
