const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ClubPointsAdjustment', {
    ClubPointsAdjustmentID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cpaPersonId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    cpaClubId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Club',
        key: 'ClubID'
      }
    },
    DateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PointsSubtracted: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    cpaStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    cpaClubPointsAdjustmentReasonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'ClubPointsAdjustmentReason',
        key: 'ClubPointsAdjustmentReasonID'
      }
    },
    ClubPointsAdjustmentGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ClubPointsAdjustmentDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ClubPointsAdjustment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ClubPointsAdjustment$CacheLookup",
        fields: [
          { name: "ClubPointsAdjustmentDateModified" },
          { name: "ClubPointsAdjustmentGuid" },
        ]
      },
      {
        name: "ClubPointsAdjustment$ClubPointsAdjustmentGuid",
        fields: [
          { name: "ClubPointsAdjustmentGuid" },
        ]
      },
      {
        name: "ClubPointsAdjustment$ClubPointsAdjustmentID",
        fields: [
          { name: "ClubPointsAdjustmentID" },
        ]
      },
      {
        name: "ClubPointsAdjustment$cpaClubID",
        fields: [
          { name: "cpaClubId" },
        ]
      },
      {
        name: "ClubPointsAdjustment$cpaPersonID",
        fields: [
          { name: "cpaPersonId" },
        ]
      },
      {
        name: "ClubPointsAdjustment$cpaStaffID",
        fields: [
          { name: "cpaStaffID" },
        ]
      },
      {
        name: "ClubPointsAdjustment$PrimaryKey",
        unique: true,
        fields: [
          { name: "ClubPointsAdjustmentID" },
        ]
      },
    ]
  });
};
