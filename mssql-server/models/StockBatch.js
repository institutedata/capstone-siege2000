const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StockBatch', {
    StockBatchID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    StockID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Stock',
        key: 'StockID'
      }
    },
    BatchID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ExpiryDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SOH: {
      type: DataTypes.REAL,
      allowNull: true
    },
    PackagedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CostPrice: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    Closed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Quantity: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    StaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    SupplierID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Supplier',
        key: 'SupplierID'
      }
    },
    StockBatchGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    StockBatchDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sbScriptID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Script',
        key: 'ScriptID'
      }
    },
    sbStockLocationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    sbInvoiceItemID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ConversionID: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sbCompoundingAdjustmentFactor: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    OriginalSOH: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    AnalysisCertFileDetails: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    sbStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'StockBatch',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "StockBatch$CacheLookup",
        fields: [
          { name: "StockBatchDateModified" },
          { name: "StockBatchGuid" },
        ]
      },
      {
        name: "StockBatch$ExpiryDate",
        fields: [
          { name: "ExpiryDate" },
        ]
      },
      {
        name: "StockBatch$StaffID",
        fields: [
          { name: "StaffID" },
        ]
      },
      {
        name: "StockBatch$StockBatch",
        fields: [
          { name: "StockID" },
          { name: "BatchID" },
        ]
      },
      {
        name: "StockBatch$StockBatchGuid",
        fields: [
          { name: "StockBatchGuid" },
        ]
      },
      {
        name: "StockBatch$StockBatchID",
        unique: true,
        fields: [
          { name: "StockBatchID" },
        ]
      },
      {
        name: "StockBatch$StockID",
        fields: [
          { name: "StockID" },
        ]
      },
    ]
  });
};
