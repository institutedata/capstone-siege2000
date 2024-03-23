const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PersonLoyaltyCards', {
    PersonLoyaltyCardsID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PersonLoyaltyCards_LoyaltyCardScheme: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PersonLoyaltyCards_PersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    PersonLoyaltyCardsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PersonLoyaltyCardsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PersonLoyaltyCardNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PersonLoyaltyCards',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PersonLoyaltyCards$CacheLookup",
        fields: [
          { name: "PersonLoyaltyCardsDateModified" },
          { name: "PersonLoyaltyCardsGuid" },
        ]
      },
      {
        name: "PersonLoyaltyCards$PersonLoyaltyCardsGuid",
        fields: [
          { name: "PersonLoyaltyCardsGuid" },
        ]
      },
      {
        name: "PersonLoyaltyCards$PrimaryKey",
        unique: true,
        fields: [
          { name: "PersonLoyaltyCardsID" },
        ]
      },
    ]
  });
};
