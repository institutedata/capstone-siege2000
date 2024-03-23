const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StaffGroupToSOP', {
    StaffGroupToSOPID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    stsStaffGroupID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'StaffGroup',
        key: 'StaffGroupID'
      }
    },
    stsSOPID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'SOPS',
        key: 'SOPSID'
      }
    },
    StaffGroupToSOPGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    StaffGroupToSOPDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    stsStartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    stsEndDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'StaffGroupToSOP',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_StaffGroupToSOP",
        unique: true,
        fields: [
          { name: "StaffGroupToSOPID" },
        ]
      },
      {
        name: "StaffGroupToSOP$CacheLookup",
        fields: [
          { name: "StaffGroupToSOPDateModified" },
          { name: "StaffGroupToSOPGuid" },
        ]
      },
      {
        name: "StaffGroupToSOP$StaffGroupToSOPGuid",
        fields: [
          { name: "StaffGroupToSOPGuid" },
        ]
      },
    ]
  });
};
