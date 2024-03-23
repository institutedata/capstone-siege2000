const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ClubPointsAdjustmentReason', {
    ClubPointsAdjustmentReasonID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ClubPointsAdjustmentReason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ClubPointsAdjustmentReasonGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ClubPointsAdjustmentReasonDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ClubPointsAdjustmentReason',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ClubPointsAdjustmentReason$CacheLookup",
        fields: [
          { name: "ClubPointsAdjustmentReasonDateModified" },
          { name: "ClubPointsAdjustmentReasonGuid" },
        ]
      },
      {
        name: "ClubPointsAdjustmentReason$ClubPointsAdjustmentReasonGuid",
        fields: [
          { name: "ClubPointsAdjustmentReasonGuid" },
        ]
      },
      {
        name: "ClubPointsAdjustmentReason$ClubPointsAdjustmentReasonID",
        fields: [
          { name: "ClubPointsAdjustmentReasonID" },
        ]
      },
      {
        name: "ClubPointsAdjustmentReason$PrimaryKey",
        unique: true,
        fields: [
          { name: "ClubPointsAdjustmentReasonID" },
        ]
      },
    ]
  });
};
