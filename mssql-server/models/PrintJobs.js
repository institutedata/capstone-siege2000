const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PrintJobs', {
    Description: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    StockID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Quantity: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    DatePrinted: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PrintJobsID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PrintJobsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PrintJobsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PrintJobs',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PrintJobs",
        unique: true,
        fields: [
          { name: "PrintJobsID" },
        ]
      },
      {
        name: "PrintJobs$CacheLookup",
        fields: [
          { name: "PrintJobsDateModified" },
          { name: "PrintJobsGuid" },
        ]
      },
      {
        name: "PrintJobs$PrintJobsGuid",
        fields: [
          { name: "PrintJobsGuid" },
        ]
      },
    ]
  });
};
