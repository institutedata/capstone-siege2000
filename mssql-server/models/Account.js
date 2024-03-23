const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Account', {
    AccountID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    AccountName: {
      type: DataTypes.STRING(50),
      allowNull: true
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
    CreditLimit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PrescriptionsOnAC: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
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
      type: DataTypes.STRING(200),
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
      defaultValue: 0,
      references: {
        model: 'AccountClass',
        key: 'AccountClassId'
      }
    },
    AutochargeScripts: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    InsuranceCompany: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    InsuranceCompanyMarkup: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    InsuranceCompanyDispensingFee: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    InsurerID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    InsurerCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    GSTNowOwing: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    AccountCategoryID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'AccountCategory',
        key: 'AccountcategoryID'
      }
    },
    ABarcode: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    AEmail: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    EmailStatement: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    SortedStatement: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    TAccountID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    acDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    acDateCreated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    acDateUpdated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AccountGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ShowPersonTotal: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    MonthlyChargeAmount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    MonthlyCharge: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    MonthlyChargeText: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AccXeroGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    acDirectDebit: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    SendFullAccountDetailsToXero: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    AccountUnitNumber: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    AccountStreetNumber: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    AlwaysAllowDiscount: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    acAddress2: {
      type: DataTypes.STRING(210),
      allowNull: true
    },
    acBuildingName: {
      type: DataTypes.STRING(210),
      allowNull: true
    },
    acStateID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    acEmailPOSReceiptToCustomer: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    acUseCOnfidentialPersonDetails: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    acEmailPOSReceiptToAccount: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    acForiegnCurrencyToUseID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'ForiegnExchange',
        key: 'FORIEGNEXCHANGEID'
      }
    },
    acPrivateInsuranceSystemID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    acAccountOwnerPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    acXeroTransmissionDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    acRollOverFrequency: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    acCountryID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    acConversionID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    acTaxNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Account',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Account$ABarcode",
        fields: [
          { name: "ABarcode" },
        ]
      },
      {
        name: "Account$AccountCategoryID",
        fields: [
          { name: "AccountCategoryID" },
        ]
      },
      {
        name: "Account$AccountClassID",
        fields: [
          { name: "AccountClassID" },
        ]
      },
      {
        name: "Account$AccountGuid",
        fields: [
          { name: "AccountGuid" },
        ]
      },
      {
        name: "Account$AccountName",
        fields: [
          { name: "AccountName" },
        ]
      },
      {
        name: "Account$InsuranceCompany",
        fields: [
          { name: "InsuranceCompany" },
        ]
      },
      {
        name: "Account$PrimaryKey",
        unique: true,
        fields: [
          { name: "AccountID" },
        ]
      },
      {
        name: "Account$TAccountID",
        fields: [
          { name: "TAccountID" },
        ]
      },
    ]
  });
};
