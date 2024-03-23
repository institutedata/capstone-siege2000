const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StockToSOP', {
    StockToSOPID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    stsStockID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'Stock',
        key: 'StockID'
      }
    },
    stsSOPID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'SOPS',
        key: 'SOPSID'
      }
    },
    StockToSOPGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    StockToSOPDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    stsStartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    stsEndDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'StockToSOP',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_StockToSOP",
        unique: true,
        fields: [
          { name: "StockToSOPID" },
        ]
      },
      {
        name: "StockToSOP$CacheLookup",
        fields: [
          { name: "StockToSOPDateModified" },
          { name: "StockToSOPGuid" },
        ]
      },
      {
        name: "StockToSOP$StockToSOPGuid",
        fields: [
          { name: "StockToSOPGuid" },
        ]
      },
    ]
  });
};
