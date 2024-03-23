const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OrderItems', {
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Orders',
        key: 'OrderID'
      }
    },
    InvoiceID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    StockID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Stock',
        key: 'StockID'
      }
    },
    oiStockLocationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Quantity: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    Comment: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    QtyDelivered: {
      type: DataTypes.REAL,
      allowNull: true
    },
    InvoiceItemID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Acknowledged: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    QtyInv: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    oiListCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    oiRealCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    oiRetail: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    oiDelivered: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    PDE: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    oiDateDelivered: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ManualOrder: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    OrderItemsID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    oiSaveRetail: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    oiSaveListCost: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    oiSaveRealCost: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    oiChecked: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    OrderItemsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    OrderItemsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    oiStockCardListCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    oiStockCardRealCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    oiStockCardOldMarkup: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    oiStockCardOldRCMarkup: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    Tote: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    oiScriptID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    oiPriceChangeOnly: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    oiStockCardRetail: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    oiForiegnCurrencyCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    oiForiegnCurrencyRealCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    oiTaxInCents: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'OrderItems',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "OrderItems$Acknowledged",
        fields: [
          { name: "Acknowledged" },
        ]
      },
      {
        name: "OrderItems$CacheLookup",
        fields: [
          { name: "OrderItemsDateModified" },
          { name: "OrderItemsGuid" },
        ]
      },
      {
        name: "OrderItems$InvoiceID",
        fields: [
          { name: "InvoiceID" },
        ]
      },
      {
        name: "OrderItems$InvoiceItemID",
        fields: [
          { name: "InvoiceItemID" },
        ]
      },
      {
        name: "OrderItems$oiDateDelivered",
        fields: [
          { name: "oiDateDelivered" },
        ]
      },
      {
        name: "OrderItems$oiDelivered",
        fields: [
          { name: "oiDelivered" },
        ]
      },
      {
        name: "OrderItems$oiStockLocationID",
        fields: [
          { name: "oiStockLocationID" },
        ]
      },
      {
        name: "OrderItems$OrderID",
        fields: [
          { name: "OrderID" },
        ]
      },
      {
        name: "OrderItems$OrderItemsGuid",
        fields: [
          { name: "OrderItemsGuid" },
        ]
      },
      {
        name: "OrderItems$StockID",
        fields: [
          { name: "StockID" },
        ]
      },
      {
        name: "PK_OrderItems",
        unique: true,
        fields: [
          { name: "OrderItemsID" },
        ]
      },
    ]
  });
};
