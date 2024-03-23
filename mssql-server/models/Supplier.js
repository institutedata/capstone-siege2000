const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Supplier', {
    SupplierID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SupplierName: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING(210),
      allowNull: true
    },
    City: {
      type: DataTypes.STRING(100),
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
    LastOrder: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PurchaseValue: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Brand: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    DirectOnly: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    HeaderCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ModemPhoneNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ModemOrderFile: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AccountNumber: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OrderType: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Password: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SessionCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Header: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Trailer: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ComPort: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    InitString: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Parity: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DataBits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    StopBits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    BaudRate: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    HangupString: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Message: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DialingPrefix: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ModemReplyFile: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ModemReplyWait: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ForcePharmaCodeLength: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DrugWholesaler: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    SupplierUpdateID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PSLNetID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PSLOrders: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    PWLOrders: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    OrdersURL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    HOPSLNetID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    HOHeaderCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    HOOrders: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    UpdateRealCost: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    UpdateListCost: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    UpdateRetail: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    RecalculateRetail: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    RecalculateRetailOnRC: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ShowListCost: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    ShowRealCost: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    UpdateIncreasesOnly: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    SendToInternetShop: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    supDateModified: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    Pharmx: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    PharmxID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    HOSupplierID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    supSupplierCommentID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'SupplierComment',
        key: 'SupplierCommentID'
      }
    },
    SupplierGuid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DontShowNewListCost: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Wholesaler: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    BuyingGroup: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Restricted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    PriceList: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    SupplierDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SupXeroGuid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DontAutoSendOrderToXero: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    OrderingEmailAddress: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RepEmailAddress: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RepMobileNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SendOrderByEmail: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    supAccountID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'AccountID'
      }
    },
    supBranchVPNID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'BranchVPN',
        key: 'BranchID'
      }
    },
    supMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    supXeroTrackingCategory: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SupplierUnitNumber: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    SupplierStreetNumber: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    SupplierSuburb: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SupplierPostCode: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    supAddress2: {
      type: DataTypes.STRING(210),
      allowNull: true
    },
    supBuildingName: {
      type: DataTypes.STRING(210),
      allowNull: true
    },
    DontOrderFromThisSupplier: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    supStateID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    supUseCOnfidentialPersonDetails: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    supForiegnCurrencyToUseID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'ForiegnExchange',
        key: 'FORIEGNEXCHANGEID'
      }
    },
    supCountryID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    supTaxNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PharmxMainSupplierID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'Supplier',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Supplier$Brand$",
        fields: [
          { name: "Brand" },
        ]
      },
      {
        name: "Supplier$CacheLookup",
        fields: [
          { name: "supDateModified" },
          { name: "SupplierGuid" },
        ]
      },
      {
        name: "Supplier$HOPSLNetID",
        fields: [
          { name: "HOPSLNetID" },
        ]
      },
      {
        name: "Supplier$PrimaryKey",
        unique: true,
        fields: [
          { name: "SupplierID" },
        ]
      },
      {
        name: "Supplier$PSLNetID",
        fields: [
          { name: "PSLNetID" },
        ]
      },
      {
        name: "Supplier$SendToInternetShop",
        fields: [
          { name: "SendToInternetShop" },
        ]
      },
      {
        name: "Supplier$supDateModified",
        fields: [
          { name: "supDateModified" },
        ]
      },
      {
        name: "Supplier$SupplierGuid",
        fields: [
          { name: "SupplierGuid" },
        ]
      },
      {
        name: "Supplier$SupplierName",
        fields: [
          { name: "SupplierName" },
        ]
      },
      {
        name: "Supplier$SupplierUpdateID",
        fields: [
          { name: "SupplierUpdateID" },
        ]
      },
    ]
  });
};
