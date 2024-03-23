const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StockClassificationType', {
    StockClassificationTypeID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    StockClassificationType: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    StockClassificationTypeShortCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    stDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    stMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    StockClassificationTypeGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    StockClassificationTypeDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    stCDRecordableType: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'StockClassificationType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_StockClassificationType",
        unique: true,
        fields: [
          { name: "StockClassificationTypeID" },
        ]
      },
      {
        name: "StockClassificationType$CacheLookup",
        fields: [
          { name: "StockClassificationTypeDateModified" },
          { name: "StockClassificationTypeGuid" },
        ]
      },
      {
        name: "StockClassificationType$StockClassificationType",
        fields: [
          { name: "StockClassificationType" },
        ]
      },
      {
        name: "StockClassificationType$StockClassificationTypeGuid",
        fields: [
          { name: "StockClassificationTypeGuid" },
        ]
      },
    ]
  });
};
