const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Rounding', {
    RoundingID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LowerLimit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    UpperLimit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PricePoint: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    RoundUP: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    RoundingGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    RoundingDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Rounding',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Rounding$CacheLookup",
        fields: [
          { name: "RoundingDateModified" },
          { name: "RoundingGuid" },
        ]
      },
      {
        name: "Rounding$PrimaryKey",
        unique: true,
        fields: [
          { name: "RoundingID" },
        ]
      },
      {
        name: "Rounding$RoundingGuid",
        fields: [
          { name: "RoundingGuid" },
        ]
      },
      {
        name: "Rounding$RoundingID",
        fields: [
          { name: "RoundingID" },
        ]
      },
    ]
  });
};
