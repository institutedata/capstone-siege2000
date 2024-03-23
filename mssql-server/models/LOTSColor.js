const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LOTSColor', {
    ColorID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    ColorName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ColorValue: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    LOTSColorGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    LOTSColorDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'LOTSColor',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "LOTSColor$CacheLookup",
        fields: [
          { name: "LOTSColorDateModified" },
          { name: "LOTSColorGuid" },
        ]
      },
      {
        name: "LOTSColor$LOTSColorGuid",
        fields: [
          { name: "LOTSColorGuid" },
        ]
      },
      {
        name: "LOTSColor$PrimaryKey",
        unique: true,
        fields: [
          { name: "ColorID" },
        ]
      },
      {
        name: "LOTSColor$Purpose",
        fields: [
          { name: "ColorName" },
        ]
      },
      {
        name: "LOTSColor$PurposeID",
        fields: [
          { name: "ColorID" },
        ]
      },
    ]
  });
};
