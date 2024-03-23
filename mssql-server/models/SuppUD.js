const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SuppUD', {
    SupplierUpdateID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Code: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    SupplierName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    WholesalerID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DefaultMarkup: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    DefaultCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CostType: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    UseRRP: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    UpdateBarcodes: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    UpdatePartcodes: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    UpdateOuters: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    UpdateTradeName: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    UpdateCostPriceOnly: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    PrintStickers: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    LastUpdated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LastUpdatedFile: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ProductGroup: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    SupplierCost: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    PrefSupplier: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    SupplierID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Supplier',
        key: 'SupplierID'
      }
    },
    OrderSuppID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    AutoProcess: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    UpdateIncreasesOnly: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    DiscountGiven: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    DefaultProductGroupID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ProductGroup',
        key: 'ProductGroupID'
      }
    },
    DefaultProductClassID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ProductClass',
        key: 'ProductClassID'
      }
    },
    DefaultClubID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Club',
        key: 'ClubID'
      }
    },
    DefaultPriceSystem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DefaultPriceBySupplier: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BuyingGroup: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    WholeSaler: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DefaultClubPoints: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UpdateLastBuy: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    SettingsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SuppUDDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UseRRPAsMainRRP: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    TradenamePrefix: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    SetBarcodeAsPreferred: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'SuppUD',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SuppUD$CacheLookup",
        fields: [
          { name: "SuppUDDateModified" },
          { name: "SettingsGuid" },
        ]
      },
      {
        name: "SuppUD$Code",
        fields: [
          { name: "Code" },
        ]
      },
      {
        name: "SuppUD$OrderSuppID",
        fields: [
          { name: "OrderSuppID" },
        ]
      },
      {
        name: "SuppUD$PrimaryKey",
        unique: true,
        fields: [
          { name: "SupplierUpdateID" },
        ]
      },
      {
        name: "SuppUD$SettingsGuid",
        fields: [
          { name: "SettingsGuid" },
        ]
      },
      {
        name: "SuppUD$SupplierID",
        fields: [
          { name: "SupplierID" },
        ]
      },
      {
        name: "SuppUD$SupplierUpdateID",
        fields: [
          { name: "SupplierUpdateID" },
        ]
      },
      {
        name: "SuppUD$WholesalerID",
        fields: [
          { name: "WholesalerID" },
        ]
      },
    ]
  });
};
