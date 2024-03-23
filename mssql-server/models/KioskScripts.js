const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('KioskScripts', {
    KioskScriptsID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    KioskScriptBarcode: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    KioskScriptDispensed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    KioskScriptsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    KioskScriptsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    KioskScriptsComment: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    KioskScriptStatus: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    KioskScriptStatusURL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    KioskScriptPDFDownloadURL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    KioskScriptPDF: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    KioskScriptStatusEnum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    KioskScriptType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    KioskScriptBasketID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'KioskScriptBasket',
        key: 'KioskScriptBasketID'
      }
    },
    KioskScriptPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    KioskScriptPackagingType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    KioskScriptPriority: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ksStockLocationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ksScriptID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Script',
        key: 'ScriptID'
      }
    },
    ksAdditionalAddressID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'AdditionalAddresses',
        key: 'AdditionalAddressesID'
      }
    },
    ksSignalRMessageID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'SignalRMessage',
        key: 'SignalRMessageID'
      }
    },
    TimeInSecondsForNotification: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    KioskScriptDoctorID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Doctor',
        key: 'DoctorID'
      }
    },
    ksPharmacyDepotID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'PharmacyDepots',
        key: 'PharmacyDepotsID'
      }
    },
    ksFormulationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Formulation',
        key: 'FormulationID'
      }
    },
    ScheduledTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PDFPrinted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'KioskScripts',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "KioskScriptBasket$KioskScriptStatusEnum",
        fields: [
          { name: "KioskScriptStatusEnum" },
        ]
      },
      {
        name: "KioskScripts$CacheLookup",
        fields: [
          { name: "KioskScriptsDateModified" },
          { name: "KioskScriptsGuid" },
        ]
      },
      {
        name: "KioskScripts$KioskScriptsGuid",
        fields: [
          { name: "KioskScriptsGuid" },
        ]
      },
      {
        name: "KioskScripts$ScriptType",
        fields: [
          { name: "KioskScriptType" },
          { name: "ksScriptID" },
        ]
      },
      {
        name: "PK_KioskScripts",
        unique: true,
        fields: [
          { name: "KioskScriptsID" },
        ]
      },
    ]
  });
};
