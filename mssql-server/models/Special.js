const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Special', {
    SpecialID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SpecialName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    StartDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    FinishDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DateCreated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    HOSpecialID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    EveryDaySpecial: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ActiveSpecial: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    LowestPricedItemsFirst: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    NoFurtherDiscount: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    HOExport: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    StockLocationIDs: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SpecialGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SpecialDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    spDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    SpecialTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SpecialPriority: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'Special',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Special$CacheLookup",
        fields: [
          { name: "SpecialDateModified" },
          { name: "SpecialGuid" },
        ]
      },
      {
        name: "Special$HOSpecialID",
        fields: [
          { name: "HOSpecialID" },
        ]
      },
      {
        name: "Special$PrimaryKey",
        unique: true,
        fields: [
          { name: "SpecialID" },
        ]
      },
      {
        name: "Special$SpecialGuid",
        fields: [
          { name: "SpecialGuid" },
        ]
      },
      {
        name: "Special$SpecialID",
        fields: [
          { name: "SpecialID" },
        ]
      },
    ]
  });
};
