const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MultiDrug', {
    MultiDrugID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Indication: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DrugID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PatientCharge: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    SolventID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Solvent',
        key: 'SolventID'
      }
    },
    CnANoteID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CnANoteIDs: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    DefaultCnANoteIDs: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    NHSCatID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'DrugCategory',
        key: 'NHSCatID'
      }
    },
    RepatNHSCode: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    NHSCode: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    MaxRpt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    MaxQty: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    InfoNoteID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SPC: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    StdInstr: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SuperSigCode: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ACDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ACQuantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ACRepeats: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    UpdateID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ACNHSCatID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DrugUpdateID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Bioequivalent: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SAHealthFundNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    WAHealthFundNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CPINumber: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    DispensaryMessage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UserDispensaryMessage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PharmacistMessage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PriceOptionID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DHBPriceOptionID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    MDSpecialRegID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    MDPremium: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    MDMPSOLimit: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    SubsidyNormal: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    SubsidyHigh: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    StatimRule: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    chkHospital: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    chkMax30DaySSWarning: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    chkControlledDrug: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    chkRemoveCoPayment: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    chkOC: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    chkOnlyCombination: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    chkNotInCombination: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    chkCertCondAsk: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    chkCertCondRemovesPremium: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    chkCertCondIndicatesSS: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    chkSpecAuthAsk: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    chkSpecAuthRemovesPremium: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    chkSpecAuthIndicatesSS: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    chkAskSpecialistRecommendation: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    chkAskServiceContract: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    HOMultiDrugID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    LastGovtPremium: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    NewMultiDrugID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    NewDrugUpdateID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    BSfDrugUpdateID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Contract: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    chkBrandSwitchFeeDrug: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    chkS29: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    chkSole: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    DateDelisted: {
      type: DataTypes.DATE,
      allowNull: true
    },
    chkMDCostBrandSource: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    mdCustomLabelID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CustomLabel',
        key: 'CustomLabelID'
      }
    },
    mdUserCustomLabelID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CustomLabel',
        key: 'CustomLabelID'
      }
    },
    SSStartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SSEndDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    BSFStartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    BSFEndDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DateDiscontinued: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MultiDrugGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    MultiDrugDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    mdPreviousCustomLabelID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PrevBSFDrugUpdateID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DispMsgDateUpdated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    mdSpecialAuthorityForm: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mdMaxQty: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    chkCertCondAllowsIncreasedQty: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    chkSpecAuthAllowsIncreasedQty: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    chkSpecialistAllowsIncreasedQty: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    MDPremiumAdjust: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    chkDeletedIndication: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    mdPremiumAdjustment: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    chkOCPatientFlag: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    chkNSSOverrideControlledByHealthSoft: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    chkNoNSSChargeOnRepeats: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    AccountToChargeScriptTo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkAlwaysClaimNSSScript: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    DateListed: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MDCBSPrice: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    PSSStartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PSSEndDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    mdNonPrintableDisplayDetails: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    chkDontPrintRxOneLabel: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'MultiDrug',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "MultiDrug$CacheLookup",
        fields: [
          { name: "MultiDrugDateModified" },
          { name: "MultiDrugGuid" },
        ]
      },
      {
        name: "MultiDrug$DrugID",
        fields: [
          { name: "DrugID" },
        ]
      },
      {
        name: "MultiDrug$DrugUpdateID",
        fields: [
          { name: "DrugUpdateID" },
        ]
      },
      {
        name: "MultiDrug$HOMultiDrugID",
        fields: [
          { name: "HOMultiDrugID" },
        ]
      },
      {
        name: "MultiDrug$MDSpecialRegID",
        fields: [
          { name: "MDSpecialRegID" },
        ]
      },
      {
        name: "MultiDrug$MultiDrugGuid",
        fields: [
          { name: "MultiDrugGuid" },
        ]
      },
      {
        name: "MultiDrug$PrimaryKey",
        unique: true,
        fields: [
          { name: "MultiDrugID" },
        ]
      },
    ]
  });
};
