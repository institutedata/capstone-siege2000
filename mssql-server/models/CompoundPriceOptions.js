const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CompoundPriceOptions', {
    PriceOptionID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PriceOptionName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Device: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Formula: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Labour: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Default: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ChargePerScript: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CompoundPriceOptionsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    CompoundPriceOptionsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HSCompoundingPriceOptionID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'CompoundPriceOptions',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "CompoundPriceOptions$PrimaryKey",
        unique: true,
        fields: [
          { name: "PriceOptionID" },
        ]
      },
    ]
  });
};
