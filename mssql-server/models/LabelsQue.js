const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LabelsQue', {
    LabelID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    StockID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    lqDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LabelQty: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Printed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    lqStockLocationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PrintFrom: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    lqUnitID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    lqProg: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    labelsQueGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    labelsQueDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'LabelsQue',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "labelsQue$CacheLookup",
        fields: [
          { name: "labelsQueDateModified" },
          { name: "labelsQueGuid" },
        ]
      },
      {
        name: "LabelsQue$LabelID",
        fields: [
          { name: "LabelID" },
        ]
      },
      {
        name: "labelsQue$labelsQueGuid",
        fields: [
          { name: "labelsQueGuid" },
        ]
      },
      {
        name: "LabelsQue$lqComputerID",
        fields: [
          { name: "lqUnitID" },
        ]
      },
      {
        name: "LabelsQue$lqStockLocationID",
        fields: [
          { name: "lqStockLocationID" },
        ]
      },
      {
        name: "LabelsQue$PrimaryKey",
        unique: true,
        fields: [
          { name: "LabelID" },
        ]
      },
      {
        name: "LabelsQue$Printed",
        fields: [
          { name: "Printed" },
        ]
      },
      {
        name: "LabelsQue$StockID",
        fields: [
          { name: "StockID" },
        ]
      },
    ]
  });
};
