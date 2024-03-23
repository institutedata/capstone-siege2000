const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Barcode', {
    BarcodeID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    StockID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'Stock',
        key: 'StockID'
      }
    },
    Barcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    LoyaltyBarcode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    StickerBarcode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    BarcodeGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    BarcodeDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    baNote: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    barMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    PreferredForOrder: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'Barcode',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Barcode$Barcode",
        unique: true,
        fields: [
          { name: "Barcode" },
        ]
      },
      {
        name: "Barcode$BarcodeGuid",
        fields: [
          { name: "BarcodeGuid" },
        ]
      },
      {
        name: "Barcode$BarcodeID",
        unique: true,
        fields: [
          { name: "BarcodeID" },
        ]
      },
      {
        name: "Barcode$CacheLookup",
        fields: [
          { name: "BarcodeDateModified" },
          { name: "BarcodeGuid" },
        ]
      },
      {
        name: "Barcode$CardID",
        fields: [
          { name: "StockID" },
        ]
      },
      {
        name: "Barcode$LoyaltyBarcode",
        fields: [
          { name: "LoyaltyBarcode" },
        ]
      },
      {
        name: "Barcode$PrimaryKey",
        unique: true,
        fields: [
          { name: "BarcodeID" },
        ]
      },
    ]
  });
};
