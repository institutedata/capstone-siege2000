const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SouthernCross', {
    SouthernCrossID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SouthernCrossClaim: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SouthernCrossMessage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SouthernCrossGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SouthernCrossDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SouthernCross',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SouthernCross",
        unique: true,
        fields: [
          { name: "SouthernCrossID" },
        ]
      },
      {
        name: "SouthernCross$CacheLookup",
        fields: [
          { name: "SouthernCrossDateModified" },
          { name: "SouthernCrossGuid" },
        ]
      },
      {
        name: "SouthernCross$SouthernCrossClaim",
        fields: [
          { name: "SouthernCrossClaim" },
        ]
      },
      {
        name: "SouthernCross$SouthernCrossGuid",
        fields: [
          { name: "SouthernCrossGuid" },
        ]
      },
    ]
  });
};
