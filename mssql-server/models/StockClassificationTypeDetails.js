const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StockClassificationTypeDetails', {
    StockClassificationTypeDetailsID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sdStockID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'Stock',
        key: 'StockID'
      }
    },
    sdStateID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    sdStockClassificationTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'StockClassificationType',
        key: 'StockClassificationTypeID'
      }
    },
    sdDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    sdMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    StockClassificationTypeDetailsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    StockClassificationTypeDetailsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'StockClassificationTypeDetails',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_StockClassificationTypeDetails",
        unique: true,
        fields: [
          { name: "StockClassificationTypeDetailsID" },
        ]
      },
      {
        name: "StockClassificationTypeDetails$CacheLookup",
        fields: [
          { name: "StockClassificationTypeDetailsDateModified" },
          { name: "StockClassificationTypeDetailsGuid" },
        ]
      },
      {
        name: "StockClassificationTypeDetails$StockClassificationTypeDetailsGuid",
        fields: [
          { name: "StockClassificationTypeDetailsGuid" },
        ]
      },
    ]
  });
};
