const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PriceOptions', {
    PriceOptionID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Description: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Markup: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    DispensingFee: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ContainerFee: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    WholesalerMarkup: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    SafetyCapFee: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CosID: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PUCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CohortID: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ServiceFee: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ServicePUCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    MonthlyServiceFee: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    dhbMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    EffectiveFromDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RepeatServiceFee: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TheMonthlyServiceFee: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PriceOptionsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PriceOptionsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ServiceTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    poMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'PriceOptions',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PriceOptions$CacheLookup",
        fields: [
          { name: "PriceOptionsDateModified" },
          { name: "PriceOptionsGuid" },
        ]
      },
      {
        name: "PriceOptions$Description",
        unique: true,
        fields: [
          { name: "PriceOptionID" },
        ]
      },
      {
        name: "PriceOptions$PriceOptionsGuid",
        fields: [
          { name: "PriceOptionsGuid" },
        ]
      },
      {
        name: "PriceOptions$PrimaryKey",
        unique: true,
        fields: [
          { name: "PriceOptionID" },
        ]
      },
    ]
  });
};
