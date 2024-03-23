const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DHBPriceOptions', {
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
    EffectiveFromDate: {
      type: DataTypes.DATE,
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
    DHBPriceOptionsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DHBPriceOptionsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dhbMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    RepeatServiceFee: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TheMonthlyServiceFee: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ServiceTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dhbDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'DHBPriceOptions',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "DHBPriceOptions$CacheLookup",
        fields: [
          { name: "DHBPriceOptionsDateModified" },
          { name: "DHBPriceOptionsGuid" },
        ]
      },
      {
        name: "DHBPriceOptions$Description",
        unique: true,
        fields: [
          { name: "PriceOptionID" },
        ]
      },
      {
        name: "DHBPriceOptions$DHBPriceOptionsGuid",
        fields: [
          { name: "DHBPriceOptionsGuid" },
        ]
      },
      {
        name: "DHBPriceOptions$PrimaryKey",
        unique: true,
        fields: [
          { name: "PriceOptionID" },
        ]
      },
    ]
  });
};
