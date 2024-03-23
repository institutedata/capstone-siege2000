const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ClubStock', {
    ClubID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    StockID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ProductGroupID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ProductClassID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SupplierID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ClubStockID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    ClubStockGuid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ClubStockDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ClubStock',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ClubStock$CacheLookup",
        fields: [
          { name: "ClubStockDateModified" },
          { name: "ClubStockGuid" },
        ]
      },
      {
        name: "ClubStock$ClubID",
        fields: [
          { name: "ClubID" },
        ]
      },
      {
        name: "ClubStock$ClubStockGuid",
        fields: [
          { name: "ClubStockGuid" },
        ]
      },
      {
        name: "ClubStock$ProductClassID",
        fields: [
          { name: "ProductClassID" },
        ]
      },
      {
        name: "ClubStock$ProductGroupID",
        fields: [
          { name: "ProductGroupID" },
        ]
      },
      {
        name: "ClubStock$StockID",
        fields: [
          { name: "StockID" },
        ]
      },
      {
        name: "ClubStock$SupplierID",
        fields: [
          { name: "SupplierID" },
        ]
      },
    ]
  });
};
