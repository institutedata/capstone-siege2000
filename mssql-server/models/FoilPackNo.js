const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FoilPackNo', {
    FoilPackNoID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fpnFoilpackID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    fpnFoilNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    FoilPackNoGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FoilPackNoDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fpnDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'FoilPackNo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FoilpackNo$CacheLookup",
        fields: [
          { name: "FoilPackNoGuid" },
          { name: "FoilPackNoDateModified" },
        ]
      },
      {
        name: "FoilpackNo$FoilCodeLookup",
        fields: [
          { name: "fpnFoilpackID" },
          { name: "fpnFoilNo" },
        ]
      },
      {
        name: "FoilpackNo$FoilpackNoGuid",
        fields: [
          { name: "FoilPackNoGuid" },
        ]
      },
      {
        name: "FoilPackNo$PrimaryKey",
        unique: true,
        fields: [
          { name: "FoilPackNoID" },
        ]
      },
    ]
  });
};
