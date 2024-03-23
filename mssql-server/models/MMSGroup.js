const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MMSGroup', {
    MMSGroupID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    MMSID1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DollarValue1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    MMSID2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DollarValue2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    MMSID3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DollarValue3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    MMSID4: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DollarValue4: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    MMSID5: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DollarValue5: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    MMSGroupGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    MMSGroupDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MMSGroup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "MMSGroup$CacheLookup",
        fields: [
          { name: "MMSGroupDateModified" },
          { name: "MMSGroupGuid" },
        ]
      },
      {
        name: "MMSGroup$MMSGroupGuid",
        fields: [
          { name: "MMSGroupGuid" },
        ]
      },
      {
        name: "MMSGroup$MMSGroupID",
        fields: [
          { name: "MMSGroupID" },
        ]
      },
      {
        name: "MMSGroup$PrimaryKey",
        unique: true,
        fields: [
          { name: "MMSGroupID" },
        ]
      },
    ]
  });
};
