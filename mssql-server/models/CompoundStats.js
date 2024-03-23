const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CompoundStats', {
    CompoundStatsID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    StockID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SizeListIndex: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SizeMeasure: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CompoundStatsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    CompoundStatsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CompoundStats',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "CompoundStats$PrimaryKey",
        unique: true,
        fields: [
          { name: "CompoundStatsID" },
        ]
      },
    ]
  });
};
