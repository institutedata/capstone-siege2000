const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StaffToStaffGroup', {
    StaffToStaffGroupID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    stgStaffID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    stgStaffGroupID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'StaffGroup',
        key: 'StaffGroupID'
      }
    },
    StaffToStaffGroupGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    StaffToStaffGroupDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    stgStartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    stgEndDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'StaffToStaffGroup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_StaffToStaffGroup",
        unique: true,
        fields: [
          { name: "StaffToStaffGroupID" },
        ]
      },
      {
        name: "StaffToStaffGroup$CacheLookup",
        fields: [
          { name: "StaffToStaffGroupDateModified" },
          { name: "StaffToStaffGroupGuid" },
        ]
      },
      {
        name: "StaffToStaffGroup$StaffToStaffGroupGuid",
        fields: [
          { name: "StaffToStaffGroupGuid" },
        ]
      },
      {
        name: "StaffToStaffGroup$StaffToStaffGroupID",
        unique: true,
        fields: [
          { name: "StaffToStaffGroupID" },
        ]
      },
    ]
  });
};
