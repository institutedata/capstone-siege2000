const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HOStockIDS', {
    HOStockID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    StockID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'HOStockIDS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "HOStockIDS$HOStockID",
        fields: [
          { name: "HOStockID" },
        ]
      },
      {
        name: "HOStockIDS$PrimaryKey",
        unique: true,
        fields: [
          { name: "HOStockID" },
        ]
      },
      {
        name: "HOStockIDS$StockID",
        fields: [
          { name: "StockID" },
        ]
      },
    ]
  });
};
