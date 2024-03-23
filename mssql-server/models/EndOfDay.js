const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EndOfDay', {
    EndOfDayID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    UnitID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Computer',
        key: 'UnitID'
      }
    },
    StartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EndDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SentToMoeGenius: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    EndOfDayGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    EndOfDayDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EODSentToXero: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    EODStockLocationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    EODSaleTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'SaleType',
        key: 'SaleTypeID'
      }
    },
    CloseOffDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'EndOfDay',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "EndOfDay$CacheLookup",
        fields: [
          { name: "EndOfDayDateModified" },
          { name: "EndOfDayGuid" },
        ]
      },
      {
        name: "EndOfDay$EndOfDayGuid",
        fields: [
          { name: "EndOfDayGuid" },
        ]
      },
      {
        name: "EndOfDay$EndOfDayID",
        unique: true,
        fields: [
          { name: "EndOfDayID" },
        ]
      },
      {
        name: "EndOfDay$PrimaryKey",
        unique: true,
        fields: [
          { name: "EndOfDayID" },
        ]
      },
      {
        name: "EndOfDay$UnitID",
        fields: [
          { name: "UnitID" },
        ]
      },
    ]
  });
};
