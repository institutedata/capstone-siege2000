const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HLOutMessages', {
    HLOutMessagesID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    From: {
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
    Read: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    HLOPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    HLODoctorID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Doctor',
        key: 'DoctorID'
      }
    },
    HLOutMessagesGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    HLOutMessagesDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HLOStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    HloMessageStatusID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    HloMessageTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'HLOutMessages',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "HLOutMessages$CacheLookup",
        fields: [
          { name: "HLOutMessagesDateModified" },
          { name: "HLOutMessagesGuid" },
        ]
      },
      {
        name: "HLOutMessages$HLOutMessagesGuid",
        fields: [
          { name: "HLOutMessagesGuid" },
        ]
      },
      {
        name: "PK_HLOutMessages",
        unique: true,
        fields: [
          { name: "HLOutMessagesID" },
        ]
      },
    ]
  });
};
