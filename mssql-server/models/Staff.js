const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Staff', {
    StaffID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    StaffInitial: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    StaffName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    StaffNum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PassWord: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    WagesID: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    AllowPOS: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    AllowDisp: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    AllowOrders: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    AllowReports: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    AllowTools: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    AllowOptions: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    AllowSalesAbandon: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    AllowSalesOpenDrawer: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    AllowSalesPayOuts: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    AllowTempPriceFix: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    AllowPermPriceFix: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    AllowSalesReturns: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    AllowStockCards: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    AllowSalesDiscount: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    StaffManager: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    AllowDebtors: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    AllowClubs: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    AllowSmartClaim: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    AllowFinancialReports: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    AllowAccountSale: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    AllowCreateAccount: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    AllowDeleteSalesItems: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    AllowRM: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    AllowSpecials: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    StaffBarcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AllowLoyaltyRainchecks: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    AllowBackup: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    stDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    StaffGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    StaffDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    StaffFirstName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    StaffLastName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    StaffMiddleName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    stTitleID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Title',
        key: 'TitleID'
      }
    },
    NewPassWord: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PasswordSet: {
      type: DataTypes.DATE,
      allowNull: true
    },
    stAddress: {
      type: DataTypes.STRING(210),
      allowNull: true
    },
    stSuburb: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    stCity: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    stPostCode: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    stUnitNumber: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    stStreetNumber: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    stStateID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    stFax: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    stEmail: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    stMobile: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    stPhone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PasswordFailures: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    AHPRANumber: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    stHealthCareProviderIdentifier: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    HPIIValidated: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    stHPIIVersion: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    StaffPasswordSalt: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    StaffPasswordIterations: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    '24HourPasswordFailures': {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    LockoutTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Pharmacist: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'Staff',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Staff$CacheLookup",
        fields: [
          { name: "StaffDateModified" },
          { name: "StaffGuid" },
        ]
      },
      {
        name: "Staff$PrimaryKey",
        unique: true,
        fields: [
          { name: "StaffID" },
        ]
      },
      {
        name: "Staff$StaffBarcode",
        fields: [
          { name: "StaffBarcode" },
        ]
      },
      {
        name: "Staff$StaffGuid",
        fields: [
          { name: "StaffGuid" },
        ]
      },
      {
        name: "Staff$StaffInitial",
        fields: [
          { name: "StaffInitial" },
        ]
      },
      {
        name: "Staff$StaffName",
        fields: [
          { name: "StaffName" },
        ]
      },
      {
        name: "Staff$WagesID",
        fields: [
          { name: "WagesID" },
        ]
      },
    ]
  });
};
