const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StaffReadSOP', {
    StaffReadSOPID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    srsStaffID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    srsSOPID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      references: {
        model: 'SOPS',
        key: 'SOPSID'
      }
    },
    StaffReadSOPGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    StaffReadSOPDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DateSOPRead: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'StaffReadSOP',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_StaffReadSOP",
        unique: true,
        fields: [
          { name: "srsStaffID" },
          { name: "srsSOPID" },
        ]
      },
      {
        name: "StaffReadSOP$CacheLookup",
        fields: [
          { name: "StaffReadSOPDateModified" },
          { name: "StaffReadSOPGuid" },
        ]
      },
      {
        name: "StaffReadSOP$StaffReadSOPGuid",
        fields: [
          { name: "StaffReadSOPGuid" },
        ]
      },
      {
        name: "StaffReadSOP$StaffReadSOPID",
        unique: true,
        fields: [
          { name: "StaffReadSOPID" },
        ]
      },
    ]
  });
};
