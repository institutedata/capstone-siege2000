const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FoilPack', {
    FoilPackID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Frequency: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PackType: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Monthly: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    StartDay: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Periods: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    FoilPackGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FoilPackDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'FoilPack',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FoilPack$CacheLookup",
        fields: [
          { name: "FoilPackDateModified" },
          { name: "FoilPackGuid" },
        ]
      },
      {
        name: "FoilPack$FoilPackGuid",
        fields: [
          { name: "FoilPackGuid" },
        ]
      },
      {
        name: "FoilPack$PrimaryKey",
        unique: true,
        fields: [
          { name: "FoilPackID" },
        ]
      },
    ]
  });
};
