const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Script', {
    ScriptID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ScriptExtra',
        key: 'ScriptID'
      }
    },
    ScriptNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SaleID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Sales',
        key: 'SaleID'
      }
    },
    ReceiptID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    EntitlementNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OriginalScriptNo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SerialNumber: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "0"
    },
    OriginalPhcyNHS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OrigPharmacyNHS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FormCat: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    DoctorID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Doctor',
        key: 'DoctorID'
      }
    },
    PersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    StaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    PatientCategoryID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Category',
        key: 'CategoryID'
      }
    },
    Comment: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DrugID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    MultiDrugID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'MultiDrug',
        key: 'MultiDrugID'
      }
    },
    CnANote: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ScriptCommentID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'ScriptComment',
        key: 'ScriptCommentID'
      }
    },
    OriginalDrugName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Quantity: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    UnitDescriptor: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Instructions: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DateDispensed: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DatePrescribed: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ExpiryDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PatientPrice: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SNCO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    NHSPrice: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    AdditionalFees: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CostPrice: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SSRetail: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ScheduleSSRetail: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SubsidyCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    MixtureCode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MixtureName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    RepeatsTotal: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: "0"
    },
    RepeatsLeft: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    ExtRepeatsLeft: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    OrigNoOfRepeats: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    RepeatDispensed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    VariableRepeat: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    VariableQuantity: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    VariableInstruction: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ExternalRepeat: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Specialist: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    NSS: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    NHS: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    CountToNet: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    SafetyNet: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SpecialistID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Doctor',
        key: 'DoctorID'
      }
    },
    DateofEndorsement: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DrugsOwing: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    GenericNameUsed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    SpecialRegsApply: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Phoned: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    FoilPack: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    FoilFrequency: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    FoilAsReq: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Dental: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Deferred: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    PreviouslyDeferred: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    S3Recordable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Authority: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    Reg24: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Reg24Authority: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    EmergencySupply: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    HBFBenefit: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    DateClaimed: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NoClaim: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    PersonIDCheck: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    TimeDispensed: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FailedClaim: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    GroupCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ClaimID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Claim',
        key: 'ClaimID'
      }
    },
    ExceptionalPrice: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ClaimRegardless: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    NHSCodeDispensed: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ChildResistantClosure: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Stat: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    CreditClaim: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Wastage: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    WastageQuantity: {
      type: DataTypes.REAL,
      allowNull: true
    },
    WastagePrice: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Reclaim: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ChemNumID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'ChemNum',
        key: 'ChemNumID'
      }
    },
    CBSPrice: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    OriginalClaimID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Claim',
        key: 'ClaimID'
      }
    },
    MarkupCategory: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PremiumDeducted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ClaimUTNCounter: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CHF: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    InsuranceCompanyContribution: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    AccidentInsuranceFormNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    InsuranceID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    InsuranceSaleID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ScriptExempt: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ContiniousMedication: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    PriceOptionID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    AnyDrugsOwing: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    InitialClaim: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Dose: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    Frequency: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    SmartClaimFormNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ServiceContractNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CnANoteIDs: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    PRN: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ShrinkLabel: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ExportToMedsafe: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    CloseControl: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    PANNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ApplySundries: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Sundries: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SundriesID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    MedChartText: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NRTNumID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    MMSID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    MMSDollar: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    MMSStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PrescriberContacted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    BroughtInCard: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    InactiveRepeat: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    MMSGroupID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    NextClaimDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NSSClaimRegardless: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    OncologyGroupID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    scRealCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PurposeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Purpose',
        key: 'PurposeID'
      }
    },
    scStockLocationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ExternalPack: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ShortCourse: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Opt: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    ScriptGUID: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DoctorNoteID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'ScriptComment',
        key: 'ScriptCommentID'
      }
    },
    NoteToDoctorID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ScriptComment',
        key: 'ScriptCommentID'
      }
    },
    SouthernCrossPrice: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SouthernCrossCN: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SouthernCrossLN: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SouthernCrossStatus: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SouthernCross: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CustomPrice: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    MinusR: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    StatCE: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    StatAE: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    TakeAway: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    scPersonCohort: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TestSafeSent: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    IMMPSent: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    scrUnitID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Computer',
        key: 'UnitID'
      }
    },
    eScriptSent: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    SentinalSent: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    scrDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    DispensingsOnThisScript: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DispensingCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    FirstDispenseBarcode: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    OriginalInstructions: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TimeSentToTestSafe: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TimeSentToHIE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SnetNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RechargeSale: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ScriptTax: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    MedicationChanged: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    InstructionsChanged: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    RefererredToPrescriber: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ScannedScript: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    BatchStock: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    DaysSupply: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    QuantityPerDay: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    scRouteOfAdministrationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'RouteOfAdministration',
        key: 'RouteOfAdministrationID'
      }
    },
    MedChartStopDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ScriptDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DoctorOrder: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    MasterScriptID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Script',
        key: 'ScriptID'
      }
    },
    scContractID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Contract',
        key: 'ContractID'
      }
    },
    FormulationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Formulation',
        key: 'FormulationID'
      }
    },
    CompoundWastageAllowance: {
      type: DataTypes.REAL,
      allowNull: true
    },
    CompoundForm: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    scrAdditionalAddressID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'AdditionalAddresses',
        key: 'AdditionalAddressesID'
      }
    },
    scrAccountID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Account',
        key: 'AccountID'
      }
    },
    NoOfContainers: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    scrPatientPriceManuallySet: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ImportScriptID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    scrRobotID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Robot',
        key: 'RobotID'
      }
    },
    scrAddtoOrderAsSpecialOrder: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    scrWeighingStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    scrSignOffStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    scrQuantityToAddToSpecialOrder: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    ExcludeQtyFromLabel: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ProductExpiryDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    scrPrivateInsuranceID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    scrOriginalPharmacistID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    scrForiegnCurrencyRetail: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    scrExchangeRate: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    scrPreperationTimeInMinutes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    scrPreperationCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ScriptTaxInCents: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    scrSignalRMessageRequestingRepeat: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DeferredExpiryDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    scrSignalRMessageRequestingHeld: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    scrSterile: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    scrKioskScriptID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'KioskScripts',
        key: 'KioskScriptsID'
      }
    },
    scrKioskScriptBasketID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'KioskScriptBasket',
        key: 'KioskScriptBasketID'
      }
    },
    scrPickedUpDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    scrDontPrintPatientPrice: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    scrExpiryDays: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    OwingDrugExpiryDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    scrAdditionalContactID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'AdditionalContact',
        key: 'AdditionalContactID'
      }
    },
    scrPackingStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    scrEmailContactID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'AdditionalContact',
        key: 'AdditionalContactID'
      }
    },
    scrMobileContactID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'AdditionalContact',
        key: 'AdditionalContactID'
      }
    },
    eScriptContactType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SignOffType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    scrCompoundingPriceOptionID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'CompoundPriceOptions',
        key: 'PriceOptionID'
      }
    },
    MedChartCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsRepeat: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    MedChartType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    MedChartDurationInDays: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ScriptFlagID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    scrOnlineProviderID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    scrStrength: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    scrHealthFacilityID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    RepeatDueDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ReferalReasonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'ScriptComment',
        key: 'ScriptCommentID'
      }
    },
    scrCheckingStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    scrUnusualQuantity: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    scrUnusualDose: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    DateDeleted: {
      type: DataTypes.DATE,
      allowNull: true
    },
    scrExtendedSupply: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'Script',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "Script$ActiveScriptsForDate",
        fields: [
          { name: "DateDispensed" },
          { name: "Deferred" },
          { name: "scrDeleted" },
        ]
      },
      {
        name: "Script$ChemNumID",
        fields: [
          { name: "ChemNumID" },
        ]
      },
      {
        name: "Script$ClaimID",
        fields: [
          { name: "ClaimID" },
        ]
      },
      {
        name: "Script$Compliance",
        fields: [
          { name: "PersonID" },
          { name: "DateDispensed" },
          { name: "NSS" },
          { name: "Deferred" },
        ]
      },
      {
        name: "Script$ContiniousMedication",
        fields: [
          { name: "ContiniousMedication" },
        ]
      },
      {
        name: "Script$DateDispensed",
        fields: [
          { name: "DateDispensed" },
        ]
      },
      {
        name: "Script$DatePrescribed",
        fields: [
          { name: "DatePrescribed" },
        ]
      },
      {
        name: "Script$Deferred",
        fields: [
          { name: "Deferred" },
        ]
      },
      {
        name: "Script$DoctorID",
        fields: [
          { name: "DoctorID" },
        ]
      },
      {
        name: "Script$DrugID",
        fields: [
          { name: "DrugID" },
        ]
      },
      {
        name: "Script$EntitlementNo",
        fields: [
          { name: "EntitlementNo" },
        ]
      },
      {
        name: "Script$MasterScriptID",
        fields: [
          { name: "MasterScriptID" },
        ]
      },
      {
        name: "Script$MixtureCode",
        fields: [
          { name: "MixtureCode" },
        ]
      },
      {
        name: "Script$MMSGroupID",
        fields: [
          { name: "MMSGroupID" },
        ]
      },
      {
        name: "Script$MMSID",
        fields: [
          { name: "MMSID" },
        ]
      },
      {
        name: "Script$MMSStaffID",
        fields: [
          { name: "MMSStaffID" },
        ]
      },
      {
        name: "Script$MultiDrugID",
        fields: [
          { name: "MultiDrugID" },
        ]
      },
      {
        name: "Script$OriginalScriptNo",
        fields: [
          { name: "OriginalScriptNo" },
        ]
      },
      {
        name: "Script$PersonID",
        fields: [
          { name: "PersonID" },
        ]
      },
      {
        name: "Script$Phoned",
        fields: [
          { name: "Phoned" },
        ]
      },
      {
        name: "Script$PrimaryKey",
        unique: true,
        fields: [
          { name: "ScriptID" },
        ]
      },
      {
        name: "Script$ReceiptID",
        fields: [
          { name: "ReceiptID" },
        ]
      },
      {
        name: "Script$RepeatsLeft",
        fields: [
          { name: "RepeatsLeft" },
        ]
      },
      {
        name: "Script$SaleID",
        fields: [
          { name: "SaleID" },
        ]
      },
      {
        name: "Script$ScriptDateModified",
        fields: [
          { name: "ScriptDateModified" },
        ]
      },
      {
        name: "Script$ScriptGUID",
        fields: [
          { name: "ScriptGUID" },
        ]
      },
      {
        name: "Script$ScriptNumber",
        fields: [
          { name: "ScriptNumber" },
        ]
      },
      {
        name: "Script$scrOriginalPharmacistID",
        fields: [
          { name: "scrOriginalPharmacistID" },
        ]
      },
      {
        name: "Script$StaffID",
        fields: [
          { name: "StaffID" },
        ]
      },
      {
        name: "Script$Stats",
        fields: [
          { name: "DateDispensed" },
          { name: "Deferred" },
          { name: "scrDeleted" },
        ]
      },
      {
        name: "Script$StockLocationID",
        fields: [
          { name: "scStockLocationID" },
        ]
      },
    ]
  });
};
