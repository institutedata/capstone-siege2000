const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Stockandhistory', {
    StockID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    'Stock Type ID': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Tradename: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PLU: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    'SOH (packs)': {
      type: DataTypes.REAL,
      allowNull: true
    },
    'SOH (units)': {
      type: DataTypes.REAL,
      allowNull: true
    },
    Barcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    'Product Group': {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    'Product Class': {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    'Green Cross Master Code': {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    'MTD Qty Sold': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    'MTD $ Sold': {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    '2020-07 Qty Sold': {
      type: DataTypes.REAL,
      allowNull: true
    },
    '2020-07 $ Sold': {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    '2020-06 Qty Sold': {
      type: DataTypes.REAL,
      allowNull: true
    },
    '2020-06 $ Sold': {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    '2020-05 Qty Sold': {
      type: DataTypes.REAL,
      allowNull: true
    },
    '2020-05 $ Sold': {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    '2020-04 Qty Sold': {
      type: DataTypes.REAL,
      allowNull: true
    },
    '2020-04 $ Sold': {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    '2020-03 Qty Sold': {
      type: DataTypes.REAL,
      allowNull: true
    },
    '2020-03 $ Sold': {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    '2020-02 Qty Sold': {
      type: DataTypes.REAL,
      allowNull: true
    },
    '2020-02 $ Sold': {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    '2020-01 Qty Sold': {
      type: DataTypes.REAL,
      allowNull: true
    },
    '2020-01 $ Sold': {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    '2019-12 Qty Sold': {
      type: DataTypes.REAL,
      allowNull: true
    },
    '2019-12 $ Sold': {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    '2019-11 Qty Sold': {
      type: DataTypes.REAL,
      allowNull: true
    },
    '2019-11 $ Sold': {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    '2019-10 Qty Sold': {
      type: DataTypes.REAL,
      allowNull: true
    },
    '2019-10 $ Sold': {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    '2019-09 Qty Sold': {
      type: DataTypes.REAL,
      allowNull: true
    },
    '2019-09 $ Sold': {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    '2019-08 Qty Sold': {
      type: DataTypes.REAL,
      allowNull: true
    },
    '2019-08 $ Sold': {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Stockandhistory',
    schema: 'dbo',
    timestamps: false
  });
};
