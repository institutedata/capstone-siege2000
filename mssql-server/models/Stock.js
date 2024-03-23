const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Stock', {
    StockID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TradeName: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: "New Card"
    },
    ProductGroupID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'ProductGroup',
        key: 'ProductGroupID'
      }
    },
    ProductClassID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'ProductClass',
        key: 'ProductClassID'
      }
    },
    ClubID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Club',
        key: 'ClubID'
      }
    },
    PackSize: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    OuterSize: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    OrderSize: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    ExtraInfo: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Expected: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    SOH: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    MinimumSOH: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    MTD: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    SOO: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    ValueMTD: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Retail: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    AverageRetail: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Cost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    OldCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    RealCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    AverageCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Fillup: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    OrderVariance: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    MonthsAccurate: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    MonthsAccurateCount: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    Date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DateCreated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    POSLookup: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Beep: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Reorder: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    ReorderAfterDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Labels: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    Priced: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    AskPrice: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Label: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ListCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Markup: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    PLU: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    HotKey: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    ReorderNow: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    NewCostPrice: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ClubPoints: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ecommerce: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    SizeCategory: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    StockGST: {
      type: DataTypes.REAL,
      allowNull: true
    },
    PosRM: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    PosOTC: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    AskSerialNumber: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ProductRef: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    IgnoreHOUpdate: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    StockCommentID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'StockComment',
        key: 'StockCommentID'
      }
    },
    PrintStickers: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    PrintShelfLabels: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Export: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    OrderOnDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OrderQuantity: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    LastStocktake: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ActiveSpecialID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    NoLoyaltyPoints: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    StockType: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NoDiscount: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    MaxDiscount: {
      type: DataTypes.REAL,
      allowNull: true
    },
    NoChangeSOH: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    PackListCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    HOStockID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    EpayType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Epay',
        key: 'EpayID'
      }
    },
    LastUpdated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ConvID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    MultiBuy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    MultiBuyRetail: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    OldRetail: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    ColdChain: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    TStockID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    StockGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    skDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    PriceBySupplier: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Supplier',
        key: 'SupplierID'
      }
    },
    PricingMethod: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DontRoundStockcard: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    skVoucherTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'VoucherType',
        key: 'VoucherTypeID'
      }
    },
    MatchWithHS: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    InRobotLocationType: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    InRobotSOH: {
      type: DataTypes.REAL,
      allowNull: true
    },
    RoboticStatus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    InternetStoreID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    skSupplierNote: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CompoundingShortName: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CompoundingDevice: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    CompoundingMeasure: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    CompoundingLiquid: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    CompoundingDisplace: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    CompoundingBase: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    CompoundingActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    CompoundingExcipient: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    CompoundingIngredient: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    RecommendedRetail: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BestRule: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CompoundingAdjustmentFactor: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CompoundingDefaultUnitID: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ConversionID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UseOwnTradename: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    CompoundingIngredientType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    UseProductGroupTax: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    CountryOfOriginID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    LiquidDensity: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    stRobotID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Robot',
        key: 'RobotID'
      }
    },
    ActiveInternetSpecialID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    stNonPrintableDisplayDetails: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    stNoOfDaysSupply: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'Stock',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Stock$ActiveSpecialID",
        fields: [
          { name: "ActiveSpecialID" },
        ]
      },
      {
        name: "Stock$CacheLookup",
        fields: [
          { name: "LastUpdated" },
          { name: "StockGuid" },
        ]
      },
      {
        name: "Stock$ClassID",
        fields: [
          { name: "ProductClassID" },
        ]
      },
      {
        name: "Stock$ClubID",
        fields: [
          { name: "ClubID" },
        ]
      },
      {
        name: "Stock$ConvID",
        fields: [
          { name: "ConvID" },
        ]
      },
      {
        name: "Stock$Expected",
        fields: [
          { name: "Expected" },
        ]
      },
      {
        name: "Stock$GroupID",
        fields: [
          { name: "ProductGroupID" },
        ]
      },
      {
        name: "Stock$HOStockID",
        fields: [
          { name: "HOStockID" },
        ]
      },
      {
        name: "Stock$HotKey",
        fields: [
          { name: "HotKey" },
        ]
      },
      {
        name: "Stock$Label",
        fields: [
          { name: "Label" },
        ]
      },
      {
        name: "Stock$MTD",
        fields: [
          { name: "MTD" },
        ]
      },
      {
        name: "Stock$Name",
        fields: [
          { name: "TradeName" },
        ]
      },
      {
        name: "Stock$PLU",
        fields: [
          { name: "PLU" },
        ]
      },
      {
        name: "Stock$PrimaryKey",
        unique: true,
        fields: [
          { name: "StockID" },
        ]
      },
      {
        name: "Stock$ReorderNow",
        fields: [
          { name: "ReorderNow" },
        ]
      },
      {
        name: "Stock$SOH",
        fields: [
          { name: "SOH" },
        ]
      },
      {
        name: "Stock$StockCommentID",
        fields: [
          { name: "StockCommentID" },
        ]
      },
      {
        name: "Stock$StockGuid",
        fields: [
          { name: "StockGuid" },
        ]
      },
      {
        name: "Stock$StockType",
        fields: [
          { name: "StockType" },
        ]
      },
      {
        name: "Stock$TStockID",
        fields: [
          { name: "TStockID" },
        ]
      },
    ]
  });
};
