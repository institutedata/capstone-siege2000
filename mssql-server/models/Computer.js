const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Computer', {
    UnitID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ComputerName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DateAccessed: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsRunning: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    MerchantID: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DeviceID: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PosStockLocationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DefaultSaleType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'SaleType',
        key: 'SaleTypeID'
      }
    },
    DispStockLocationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    RegoStockLocationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    OutletID: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    WindowsOS: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Memory: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SQLInstalled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    SQLTestDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SQLTestResult: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VBNetInstalled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Flybuys: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    SendFlybuys: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Mims: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Disprepository: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    SQLClientInstalled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IPAddress: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Master: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    AATerminalID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ReportsStockLocationID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    StartAccess: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EndAccess: {
      type: DataTypes.DATE,
      allowNull: true
    },
    eScriptStatus: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    eScriptStatusDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ComputerGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ComputerDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Computer_RobotID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Robot',
        key: 'RobotID'
      }
    },
    RobotOutputLocation: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UpdateNetExeVersion: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    UpdateNetExeConfigVersion: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Computer_FoilRobotID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Robot',
        key: 'RobotID'
      }
    },
    Computer_ContractID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Contract',
        key: 'ContractID'
      }
    },
    SQLVersion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ComputerAuditDetails: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    ComputerAuditDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CopyBackupToThisComputer: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    MaxZoomPercentage: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 200
    },
    ComputerStatus: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ComputerProcesses: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Computer',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Computer$CacheLookup",
        fields: [
          { name: "ComputerDateModified" },
          { name: "ComputerGuid" },
        ]
      },
      {
        name: "Computer$ComputerGuid",
        fields: [
          { name: "ComputerGuid" },
        ]
      },
      {
        name: "Computer$ComputerName",
        unique: true,
        fields: [
          { name: "ComputerName" },
        ]
      },
      {
        name: "Computer$DeviceID",
        fields: [
          { name: "DeviceID" },
        ]
      },
      {
        name: "Computer$MerchantID",
        fields: [
          { name: "MerchantID" },
        ]
      },
      {
        name: "Computer$OutletID",
        fields: [
          { name: "OutletID" },
        ]
      },
      {
        name: "Computer$PrimaryKey",
        unique: true,
        fields: [
          { name: "UnitID" },
        ]
      },
      {
        name: "Computer$RegoID",
        fields: [
          { name: "RegoStockLocationID" },
        ]
      },
      {
        name: "Computer$UnitID",
        fields: [
          { name: "UnitID" },
        ]
      },
    ]
  });
};
