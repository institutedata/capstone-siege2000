const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StickersQue', {
    StickerID: {
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
    sqDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    StickerQty: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Printed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    sqStockLocationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PrintFrom: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    sqUnitID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Computer',
        key: 'UnitID'
      }
    },
    sqProg: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    sqSpecialID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    StickersQueGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    StickersQueDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'StickersQue',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "StickersQue$CacheLookup",
        fields: [
          { name: "StickersQueDateModified" },
          { name: "StickersQueGuid" },
        ]
      },
      {
        name: "StickersQue$PrimaryKey",
        unique: true,
        fields: [
          { name: "StickerID" },
        ]
      },
      {
        name: "StickersQue$Printed",
        fields: [
          { name: "Printed" },
        ]
      },
      {
        name: "StickersQue$sqStockLocationID",
        fields: [
          { name: "sqStockLocationID" },
        ]
      },
      {
        name: "StickersQue$sqUnitID",
        fields: [
          { name: "sqUnitID" },
        ]
      },
      {
        name: "StickersQue$StickerID",
        fields: [
          { name: "StickerID" },
        ]
      },
      {
        name: "StickersQue$StickersQueGuid",
        fields: [
          { name: "StickersQueGuid" },
        ]
      },
      {
        name: "StickersQue$StockID",
        fields: [
          { name: "StockID" },
        ]
      },
    ]
  });
};
