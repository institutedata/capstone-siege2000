const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HLInMessages', {
    HLInMessagesID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    To: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Subject: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Sent: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Acknowledged: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    HLIPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    HLIDoctorID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Doctor',
        key: 'DoctorID'
      }
    },
    HLInMessagesGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    HLInMessagesDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HliMessageStatusID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    HliMessageTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    hlKioskScriptID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'KioskScripts',
        key: 'KioskScriptsID'
      }
    },
    PrescriberMessageID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    hlStockLocationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'HLInMessages',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "HLInMessages$CacheLookup",
        fields: [
          { name: "HLInMessagesDateModified" },
          { name: "HLInMessagesGuid" },
        ]
      },
      {
        name: "HLInMessages$HLInMessagesGuid",
        fields: [
          { name: "HLInMessagesGuid" },
        ]
      },
      {
        name: "PK_HLInMessages",
        unique: true,
        fields: [
          { name: "HLInMessagesID" },
        ]
      },
    ]
  });
};
