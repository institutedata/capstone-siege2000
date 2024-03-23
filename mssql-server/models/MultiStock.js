const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MultiStock', {
    msStockLocationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    msStockID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      references: {
        model: 'Stock',
        key: 'StockID'
      }
    },
    msSOH: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    msMTD: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    msExpected: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    msReorder: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    msMinimumSOH: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    msReorderNow: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    msReorderAfterDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    msOrderOnDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    msOrderQuantity: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    MultiStockGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    MultiStockDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MultiStockID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    msRobotID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Robot',
        key: 'RobotID'
      }
    }
  }, {
    sequelize,
    tableName: 'MultiStock',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "MultiStock$CacheLookup",
        fields: [
          { name: "MultiStockDateModified" },
          { name: "MultiStockGuid" },
        ]
      },
      {
        name: "MultiStock$msReorder",
        fields: [
          { name: "msReorder" },
        ]
      },
      {
        name: "MultiStock$MultiStockGuid",
        fields: [
          { name: "MultiStockGuid" },
        ]
      },
      {
        name: "MultiStock$PrimaryKey",
        unique: true,
        fields: [
          { name: "msStockLocationID" },
          { name: "msStockID" },
        ]
      },
      {
        name: "MultiStock$StockID",
        fields: [
          { name: "msStockID" },
        ]
      },
      {
        name: "MultiStock$StockLocationID",
        fields: [
          { name: "msStockLocationID" },
        ]
      },
    ]
  });
};
