const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StockForm', {
    FormID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FormName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ShortFormName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    BaseID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Stock',
        key: 'StockID'
      }
    },
    Minutes: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Quantity: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    WasteQuantity: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    DeviceID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Stock',
        key: 'StockID'
      }
    },
    BaseWeight: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    Capsule: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    CapsuleSize: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    StockFormGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    StockFormDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HOStockFormID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    sfUOMID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    sfDoseFormID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'StockForm',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "StockForm$BaseID",
        fields: [
          { name: "BaseID" },
        ]
      },
      {
        name: "StockForm$CacheLookup",
        fields: [
          { name: "StockFormDateModified" },
          { name: "StockFormGuid" },
        ]
      },
      {
        name: "StockForm$DeviceID",
        fields: [
          { name: "DeviceID" },
        ]
      },
      {
        name: "StockForm$PrimaryKey",
        unique: true,
        fields: [
          { name: "FormID" },
        ]
      },
      {
        name: "StockForm$StockFormGuid",
        fields: [
          { name: "StockFormGuid" },
        ]
      },
    ]
  });
};
