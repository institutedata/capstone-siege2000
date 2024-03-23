const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Person', {
    PersonID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FirstName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    LastName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TitleID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Title',
        key: 'TitleID'
      }
    },
    Address: {
      type: DataTypes.STRING(210),
      allowNull: true
    },
    Suburb: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    City: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PostCode: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PhoneNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FaxNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MobileNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    EMailAddress: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BirthDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Comment: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PatientCommentID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'PatientComment',
        key: 'PatientCommentID'
      }
    },
    FamilyID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CategoryID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Category',
        key: 'CategoryID'
      }
    },
    EntitlementC: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    EntitlementR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    EntitlementSEV: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CardExpiryDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ExternalExemptDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ExternalSNet: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ExtSNetDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ExternalSNetValue: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ExtSNetValueDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MedicareNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    HFMembership: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    AccountID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Account',
        key: 'AccountID'
      }
    },
    CreditLimit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PrescriptionsOnAC: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    ShopItemsOnAC: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    StopCredit: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    MessagePOS: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    PrescriptionDiscount: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    ShopItemsDiscount: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    AccountClassID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    AutochargeScripts: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Friendly: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    RestHomeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'RestHome',
        key: 'RestHomeID'
      }
    },
    IsMMS: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    MMSEnrolledDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    InactivePatient: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    MMSFinishedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PBarcode: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DriversLicence: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MailOuts: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    RoomNumber: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    POSFamilyID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    POSCommentID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'POSComments',
        key: 'POSCommentID'
      }
    },
    OptIn: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    Alias: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Mur: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    PersonGUID: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DateCreated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DateUpdated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SmartMed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ExtraScriptFee: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ExtraScriptFeeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    TPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    HOPersonGID: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    HOPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    FlybuysCardNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LTC: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ARRC: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    PossibleLTC: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ltcStartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    arrcStartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PreferedContactMethod: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ltcEndDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PersonConsent: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    LastAssessment: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    LastAssessmentDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    peGenderID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    peEthnicGroupID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'EthnicGroup',
        key: 'EthnicGroupID'
      }
    },
    pePromotionalConsentTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'PromotionalConsentTypes',
        key: 'PromotionalConsentTypesID'
      }
    },
    perLTCExitCodeID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    perLTCEntryCodeID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ArrcEndDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CRRC: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    perPersonTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'PersonType',
        key: 'PersonTypeID'
      }
    },
    StartRegoDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EndRegoDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    perPersonLTCStatusID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    NHIValidated: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    NHIValidationVersion: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    MiddleName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EziBlistCode: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DateOfDeath: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MatchWithLife: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    GreenCrossCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    perDefaultDeliveryCommentID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'DeliveryComment',
        key: 'DeliveryCommentID'
      }
    },
    perAddressType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'AddressTypes',
        key: 'AddressTypesID'
      }
    },
    PersonUnitNumber: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PersonStreetNumber: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    perContractID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Contract',
        key: 'ContractID'
      }
    },
    ConvPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    perAddress2: {
      type: DataTypes.STRING(210),
      allowNull: true
    },
    perBuildingName: {
      type: DataTypes.STRING(210),
      allowNull: true
    },
    PersonPicture: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    perStateID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    perEmailPOSReceiptToCustomer: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    perEmailDispReceiptToCustomer: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    perHashPersonIdentifier: {
      type: DataTypes.STRING(210),
      allowNull: true
    },
    perForiegnCurrencyToUseID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'ForiegnExchange',
        key: 'FORIEGNEXCHANGEID'
      }
    },
    perSendScriptsToInternetShop: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    perAddressVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    perConnectionToken: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    perPreferredDeliveryProviderID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'DeliveryProvider',
        key: 'DeliveryProviderID'
      }
    },
    perPreferredDeliveryPackagingID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'DeliveryPackaging',
        key: 'DeliveryPackagingID'
      }
    },
    perCountryID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SendSaleToXero: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PaymentTermsDueDays: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PaymentTerms: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ConnectionTokenExpiry: {
      type: DataTypes.DATE,
      allowNull: true
    },
    perTaxNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    perPreferredASLID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    perPreferredScriptTransmissionMethod: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    LoyaltyCodeTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    perAutoChargeTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    perOnlineProviderSystemToSendTo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    perDeliverAllSales: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    perPreferredDepotID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'PharmacyDepots',
        key: 'PharmacyDepotsID'
      }
    }
  }, {
    sequelize,
    tableName: 'Person',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Person$AccountID",
        fields: [
          { name: "AccountID" },
        ]
      },
      {
        name: "Person$CacheLookup",
        fields: [
          { name: "DateUpdated" },
          { name: "PersonGUID" },
        ]
      },
      {
        name: "Person$CategoryID",
        fields: [
          { name: "CategoryID" },
        ]
      },
      {
        name: "Person$ConvPersonID",
        fields: [
          { name: "ConvPersonID" },
        ]
      },
      {
        name: "Person$DriversLicence",
        fields: [
          { name: "DriversLicence" },
        ]
      },
      {
        name: "Person$ExternalSNet",
        fields: [
          { name: "ExternalSNet" },
        ]
      },
      {
        name: "Person$ExternalSNetValue",
        fields: [
          { name: "ExternalSNetValue" },
        ]
      },
      {
        name: "Person$ExtraScriptFeeID",
        fields: [
          { name: "ExtraScriptFeeID" },
        ]
      },
      {
        name: "Person$ExtSNetDate",
        fields: [
          { name: "ExtSNetDate" },
        ]
      },
      {
        name: "Person$ExtSNetValueDate",
        fields: [
          { name: "ExtSNetValueDate" },
        ]
      },
      {
        name: "Person$FamilyID",
        fields: [
          { name: "FamilyID" },
        ]
      },
      {
        name: "Person$FirstName",
        fields: [
          { name: "FirstName" },
        ]
      },
      {
        name: "Person$Friendly",
        fields: [
          { name: "Friendly" },
        ]
      },
      {
        name: "Person$HOPersonGID",
        fields: [
          { name: "HOPersonGID" },
        ]
      },
      {
        name: "Person$HOPersonID",
        fields: [
          { name: "HOPersonID" },
        ]
      },
      {
        name: "Person$LastAssessmentDate",
        fields: [
          { name: "LastAssessmentDate" },
        ]
      },
      {
        name: "Person$LastName",
        fields: [
          { name: "LastName" },
        ]
      },
      {
        name: "Person$PBarcode",
        fields: [
          { name: "PBarcode" },
        ]
      },
      {
        name: "Person$PersonGUID",
        fields: [
          { name: "PersonGUID" },
        ]
      },
      {
        name: "Person$POSCommentID",
        fields: [
          { name: "POSCommentID" },
        ]
      },
      {
        name: "Person$POSFamilyID",
        fields: [
          { name: "POSFamilyID" },
        ]
      },
      {
        name: "Person$PrimaryKey",
        unique: true,
        fields: [
          { name: "PersonID" },
        ]
      },
      {
        name: "Person$RestHomeID",
        fields: [
          { name: "RestHomeID" },
        ]
      },
      {
        name: "Person$Suburb",
        fields: [
          { name: "Suburb" },
        ]
      },
      {
        name: "Person$TitleID",
        fields: [
          { name: "TitleID" },
        ]
      },
      {
        name: "Person$TPersonID",
        fields: [
          { name: "TPersonID" },
        ]
      },
    ]
  });
};
