const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ScriptExtra', {
    ScriptID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    PCTWastage: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    PCTWastageQuantity: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    WastageScriptNo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    AutoCharge: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    LocumID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DateCreated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    DateUpdated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    eRXSystem: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    eRXIdentifier: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    eRXOriginalIdentifier: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    eRxSent: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    eRXOriginalItemIdentifier: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    eRXSequence: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eRxDispIdentifier: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ApplyExtraFee: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ExtraFee: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ExtraSundryID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    TScriptID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PickedUpDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ScriptExtraGUID: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    MedChart: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    scrAutoChargeTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ConvertedScript: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'ScriptExtra',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ScriptExtra$CacheLookup",
        fields: [
          { name: "DateUpdated" },
          { name: "ScriptExtraGUID" },
        ]
      },
      {
        name: "ScriptExtra$eRxDispIdentifier",
        fields: [
          { name: "eRxDispIdentifier" },
        ]
      },
      {
        name: "ScriptExtra$eRXIdentifier",
        fields: [
          { name: "eRXIdentifier" },
        ]
      },
      {
        name: "ScriptExtra$eRXOriginalIdentifier",
        fields: [
          { name: "eRXOriginalIdentifier" },
        ]
      },
      {
        name: "ScriptExtra$ExtraSundryID",
        fields: [
          { name: "ExtraSundryID" },
        ]
      },
      {
        name: "ScriptExtra$LocumID",
        fields: [
          { name: "LocumID" },
        ]
      },
      {
        name: "ScriptExtra$PrimaryKey",
        unique: true,
        fields: [
          { name: "ScriptID" },
        ]
      },
      {
        name: "ScriptExtra$ScriptExtraGUID",
        fields: [
          { name: "ScriptExtraGUID" },
        ]
      },
      {
        name: "ScriptExtra$ScriptNumber",
        fields: [
          { name: "PCTWastage" },
        ]
      },
      {
        name: "ScriptExtra$TScriptID",
        fields: [
          { name: "TScriptID" },
        ]
      },
    ]
  });
};
