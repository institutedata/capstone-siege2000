const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StockIngredient', {
    StockIngredientID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    StockID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Quantity: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    IngredientOfStockID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Unit: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    StockIngredientGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    StockIngredientDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'StockIngredient',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "StockIngredient$CacheLookup",
        fields: [
          { name: "StockIngredientDateModified" },
          { name: "StockIngredientGuid" },
        ]
      },
      {
        name: "StockIngredient$IngredientOfStockID",
        fields: [
          { name: "IngredientOfStockID" },
        ]
      },
      {
        name: "StockIngredient$PrimaryKey",
        unique: true,
        fields: [
          { name: "StockIngredientID" },
        ]
      },
      {
        name: "StockIngredient$StockID",
        fields: [
          { name: "StockID" },
        ]
      },
      {
        name: "StockIngredient$StockIngredientGuid",
        fields: [
          { name: "StockIngredientGuid" },
        ]
      },
      {
        name: "StockIngredient$StockIngredientID",
        unique: true,
        fields: [
          { name: "StockIngredientID" },
        ]
      },
    ]
  });
};
