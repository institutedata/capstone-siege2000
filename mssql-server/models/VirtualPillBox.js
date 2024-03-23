const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VirtualPillBox', {
    VirtualPillBoxID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vpbPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    vpbScriptID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    vpbFoilID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    QuantityAdjustedBy: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    TotalQuantityLeft: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    VirtualPillBoxGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    VirtualPillBoxDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'VirtualPillBox',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_VirtualPillBox",
        unique: true,
        fields: [
          { name: "VirtualPillBoxID" },
        ]
      },
      {
        name: "VirtualPillBox$CacheLookup",
        fields: [
          { name: "VirtualPillBoxDateModified" },
          { name: "VirtualPillBoxGuid" },
        ]
      },
      {
        name: "VirtualPillBox$VirtualPillBoxGuid",
        fields: [
          { name: "VirtualPillBoxGuid" },
        ]
      },
    ]
  });
};
