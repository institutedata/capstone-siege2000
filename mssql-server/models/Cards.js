const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Cards', {
    CardID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CardDetails: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    CardType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ExpiryDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cdDateCreated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cdDateUpdated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CardsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    AdditionalCardDetails: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Cards',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Cards$CacheLookup",
        fields: [
          { name: "cdDateUpdated" },
          { name: "CardsGuid" },
        ]
      },
      {
        name: "Cards$CardsGuid",
        fields: [
          { name: "CardsGuid" },
        ]
      },
      {
        name: "Cards$PersonID",
        fields: [
          { name: "PersonID" },
        ]
      },
      {
        name: "Cards$PrimaryKey",
        unique: true,
        fields: [
          { name: "CardID" },
        ]
      },
    ]
  });
};
