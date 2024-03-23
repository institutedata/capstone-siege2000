const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Drug', {
    DrugID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    GenericName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    SpecRegID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Schedule: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Premium: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    GenericCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    MUOveride: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    QtyLimit: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    MPSOLimit: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    ExtempContainer: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    UnitType: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CostBrandRequired: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    AdverseDrugReport: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    WholePacksOnly: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    NarcoticB: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ActualCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Type: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ClearDays: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    SpecialProfFee: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    DispPack: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    TherapGroupID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DoseFormID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ListCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    GenericCode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SafetyCapRequired: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    InteractionCatID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DispQuantity: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    ClaimQuantity: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    MixtureCard: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    PreferredDrug: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    UnitOfMeasureID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Weight: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    AutomaticallyShrinkLabel: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    DispensingUnit: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    MedSafeCD: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    MedicineDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ClinicianDescription: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IMMP: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ClaimWastage: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    NZUlmID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    NZGenericUlmID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    NZPackUlmID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    NZGenericPackUlmID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    DrugHash: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OldDrugHash: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MSDataSheet: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    drMSClassificationID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PrevGenericCost: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HighRiskMedicine: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    DrugGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DrugDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsFeeOrRebate: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    CTPPID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    TPPID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    MPPID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DrugFormulationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Formulation',
        key: 'FormulationID'
      }
    },
    LookupShortCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ConversionID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    drRxOneDrugID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    GenericSelectionFlag: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    drCompoundFormID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'StockForm',
        key: 'FormID'
      }
    },
    DontPrintDispensaryLabel: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    drStrength: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MPID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'Drug',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Drug$CacheLookup",
        fields: [
          { name: "DrugDateModified" },
          { name: "DrugGuid" },
        ]
      },
      {
        name: "Drug$CardID",
        unique: true,
        fields: [
          { name: "DrugID" },
        ]
      },
      {
        name: "Drug$DrugGuid",
        fields: [
          { name: "DrugGuid" },
        ]
      },
      {
        name: "Drug$GenericCode",
        fields: [
          { name: "GenericCode" },
        ]
      },
      {
        name: "Drug$MPPID",
        fields: [
          { name: "MPPID" },
        ]
      },
      {
        name: "Drug$NZGenericPackUlmID",
        fields: [
          { name: "NZGenericPackUlmID" },
        ]
      },
      {
        name: "Drug$NZgenericUlmID",
        fields: [
          { name: "NZGenericUlmID" },
        ]
      },
      {
        name: "Drug$NZPackUlmID",
        fields: [
          { name: "NZPackUlmID" },
        ]
      },
      {
        name: "Drug$NZUlmID",
        fields: [
          { name: "NZUlmID" },
        ]
      },
      {
        name: "Drug$PrimaryKey",
        unique: true,
        fields: [
          { name: "DrugID" },
        ]
      },
      {
        name: "Drug$ProductName",
        fields: [
          { name: "GenericName" },
        ]
      },
      {
        name: "Drug$SupplierID4",
        fields: [
          { name: "SpecRegID" },
        ]
      },
      {
        name: "Drug$TherapGroupID",
        fields: [
          { name: "TherapGroupID" },
        ]
      },
      {
        name: "Drug$TPPID",
        fields: [
          { name: "TPPID" },
        ]
      },
      {
        name: "Drug$UnitOfMeasureID",
        fields: [
          { name: "UnitOfMeasureID" },
        ]
      },
    ]
  });
};
