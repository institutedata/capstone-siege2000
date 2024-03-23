const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ComputerOperations', {
    ComputerOperationsID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rcDateRun: {
      type: DataTypes.DATE,
      allowNull: true
    },
    rcOperationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'Operations',
        key: 'OperationID'
      }
    },
    rcComputerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'Computer',
        key: 'UnitID'
      }
    },
    ComputerOperationsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ComputerOperationsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ComputerOperations',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ComputerOperations$CacheLookup",
        fields: [
          { name: "ComputerOperationsDateModified" },
          { name: "ComputerOperationsGuid" },
        ]
      },
      {
        name: "ComputerOperations$ComputerOperationsGuid",
        fields: [
          { name: "ComputerOperationsGuid" },
        ]
      },
      {
        name: "PK_ComputerOperations",
        unique: true,
        fields: [
          { name: "ComputerOperationsID" },
        ]
      },
    ]
  });
};
