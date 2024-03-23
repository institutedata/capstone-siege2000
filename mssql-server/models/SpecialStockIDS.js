const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SpecialStockIDS', {
    StockID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    SpecialStockIDSGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SpecialStockIDSDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SpecialStockIDS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SpecialStockIDS",
        unique: true,
        fields: [
          { name: "StockID" },
        ]
      },
      {
        name: "SpecialStockIDS$CacheLookup",
        fields: [
          { name: "SpecialStockIDSDateModified" },
          { name: "SpecialStockIDSGuid" },
        ]
      },
      {
        name: "SpecialStockIDS$SpecialStockIDSGuid",
        fields: [
          { name: "SpecialStockIDSGuid" },
        ]
      },
    ]
  });
};
