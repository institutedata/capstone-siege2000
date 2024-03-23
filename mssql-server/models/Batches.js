const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Batches', {
    BatchID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Batch: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Menu: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MenuNumber: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    PrintReport: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    StockType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ProductGroupID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'ProductGroup',
        key: 'ProductGroupID'
      }
    },
    ProductClassID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'ProductClass',
        key: 'ProductClassID'
      }
    },
    SupplierID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Supplier',
        key: 'SupplierID'
      }
    },
    RealCost: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    EmailAddress: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    BatchesGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    BatchesDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EmailReport: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    CriteriaDetails: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ExtraCriteriaDetails: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MSMQCommandToRunAtEndOfExport: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MSMQCommandToRunInsteadOfMenuNumber: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    batMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    DaysOfWeekToRunReport: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TimeToRunReport: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DateBatchLastRun: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MSMQCommandToAddToCriteria: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    batUnitID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Computer',
        key: 'UnitID'
      }
    }
  }, {
    sequelize,
    tableName: 'Batches',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Batches$BatchesGuid",
        fields: [
          { name: "BatchesGuid" },
        ]
      },
      {
        name: "Batches$BatchID",
        fields: [
          { name: "BatchID" },
        ]
      },
      {
        name: "Batches$CacheLookup",
        fields: [
          { name: "BatchesDateModified" },
          { name: "BatchesGuid" },
        ]
      },
      {
        name: "Batches$PrimaryKey",
        unique: true,
        fields: [
          { name: "BatchID" },
        ]
      },
    ]
  });
};
