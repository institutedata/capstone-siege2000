const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Action', {
    ActionID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ClubID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Club',
        key: 'ClubID'
      }
    },
    ActionName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TriggerUnits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    TriggerDollars: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ResetWhenTriggered: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    DiscountPercent: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    StockID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Stock',
        key: 'StockID'
      }
    },
    StockItemPrompt: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Message: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DollarsOfSale: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PercentDiscount: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    GiftOnlyFromClub: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ActionGUID: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ActionLevel: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ActionDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Action',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Action$ActionGUID",
        fields: [
          { name: "ActionGUID" },
        ]
      },
      {
        name: "Action$ActionID",
        unique: true,
        fields: [
          { name: "ActionID" },
        ]
      },
      {
        name: "Action$CacheLookup",
        fields: [
          { name: "ActionDateModified" },
          { name: "ActionGUID" },
        ]
      },
      {
        name: "Action$ClubActionLevel",
        unique: true,
        fields: [
          { name: "ClubID" },
          { name: "ActionLevel" },
        ]
      },
      {
        name: "Action$ClubID",
        fields: [
          { name: "ClubID" },
        ]
      },
      {
        name: "Action$PrimaryKey",
        unique: true,
        fields: [
          { name: "ActionID" },
        ]
      },
      {
        name: "Action$StockID",
        fields: [
          { name: "StockID" },
        ]
      },
    ]
  });
};
