const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StockLocation', {
    StockLocationID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    StockLocation: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SLCode: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    slHeaderCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ColorID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    slAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    StockLocationGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    StockLocationDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    XeroTrackingCategory: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ParentStockLocationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    slDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'StockLocation',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "StockLocation$CacheLookup",
        fields: [
          { name: "StockLocationDateModified" },
          { name: "StockLocationGuid" },
        ]
      },
      {
        name: "StockLocation$ColorID",
        fields: [
          { name: "ColorID" },
        ]
      },
      {
        name: "StockLocation$PrimaryKey",
        unique: true,
        fields: [
          { name: "StockLocationID" },
        ]
      },
      {
        name: "StockLocation$SLCode",
        fields: [
          { name: "SLCode" },
        ]
      },
      {
        name: "StockLocation$slHeaderCode",
        fields: [
          { name: "slHeaderCode" },
        ]
      },
      {
        name: "StockLocation$StockLocationGuid",
        fields: [
          { name: "StockLocationGuid" },
        ]
      },
      {
        name: "StockLocation$StockLocationID",
        unique: true,
        fields: [
          { name: "StockLocationID" },
        ]
      },
    ]
  });
};
