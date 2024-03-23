const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StockTake', {
    StockTakeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DateCreated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Type: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OrderByGenericName: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    StockTakeGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    StockTakeDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'StockTake',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "StockTake$CacheLookup",
        fields: [
          { name: "StockTakeDateModified" },
          { name: "StockTakeGuid" },
        ]
      },
      {
        name: "StockTake$PrimaryKey",
        unique: true,
        fields: [
          { name: "StockTakeID" },
        ]
      },
      {
        name: "StockTake$StockTakeGuid",
        fields: [
          { name: "StockTakeGuid" },
        ]
      },
    ]
  });
};
