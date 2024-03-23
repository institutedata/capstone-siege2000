const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PrintStickersLabels', {
    PrintStickerLabelsID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    PrintDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ShelfLabels: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    PriceStickers: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Printed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    PrintStickersLabelsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PrintStickersLabelsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PrintStickersLabels',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PrintStickersLabels$CacheLookup",
        fields: [
          { name: "PrintStickersLabelsDateModified" },
          { name: "PrintStickersLabelsGuid" },
        ]
      },
      {
        name: "PrintStickersLabels$PriceStickers",
        fields: [
          { name: "PriceStickers" },
        ]
      },
      {
        name: "PrintStickersLabels$PrimaryKey",
        unique: true,
        fields: [
          { name: "PrintStickerLabelsID" },
        ]
      },
      {
        name: "PrintStickersLabels$PrintDate",
        fields: [
          { name: "PrintDate" },
        ]
      },
      {
        name: "PrintStickersLabels$Printed",
        fields: [
          { name: "Printed" },
        ]
      },
      {
        name: "PrintStickersLabels$PrintStickerLabelsID",
        fields: [
          { name: "PrintStickerLabelsID" },
        ]
      },
      {
        name: "PrintStickersLabels$PrintStickersLabelsGuid",
        fields: [
          { name: "PrintStickersLabelsGuid" },
        ]
      },
      {
        name: "PrintStickersLabels$ShelfLabels",
        fields: [
          { name: "ShelfLabels" },
        ]
      },
      {
        name: "PrintStickersLabels$StockID",
        fields: [
          { name: "StockID" },
        ]
      },
    ]
  });
};
