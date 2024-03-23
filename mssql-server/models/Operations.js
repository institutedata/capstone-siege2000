const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Operations', {
    OperationID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DateRun: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DateToRun: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OperationDescription: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SQLToRun: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CommandsToRun: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    opMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    RunOnMaster: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    OperationsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    OperationsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UserQuestion: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Operations',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Operations$CacheLookup",
        fields: [
          { name: "OperationsDateModified" },
          { name: "OperationsGuid" },
        ]
      },
      {
        name: "Operations$OperationsGuid",
        fields: [
          { name: "OperationsGuid" },
        ]
      },
      {
        name: "PK_Operation",
        unique: true,
        fields: [
          { name: "OperationID" },
        ]
      },
    ]
  });
};
