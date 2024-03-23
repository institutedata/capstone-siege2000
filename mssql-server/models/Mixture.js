const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Mixture', {
    MixtureCode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MixtureName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    UserCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    IngredientID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    MultiDrugID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    GenericUsed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Quantity: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    QuantityUsed: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    MixturePharmacode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    MixtureUnit: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    MixtureUnitDrug: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Batch: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Expiry: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MixtureID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    MixtureGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    MixtureDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DontCountVolume: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ParentStockID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'Mixture',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Mixture$CacheLookup",
        fields: [
          { name: "MixtureDateModified" },
          { name: "MixtureGuid" },
        ]
      },
      {
        name: "Mixture$MixtureCode",
        fields: [
          { name: "MixtureCode" },
        ]
      },
      {
        name: "Mixture$MixtureGuid",
        fields: [
          { name: "MixtureGuid" },
        ]
      },
      {
        name: "PK_Mixture",
        unique: true,
        fields: [
          { name: "MixtureID" },
        ]
      },
    ]
  });
};
