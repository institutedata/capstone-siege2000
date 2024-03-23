const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Club', {
    ClubID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ClubName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NoStock: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    NoMembers: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    DisplayAsDollars: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    NoPointsOnDiscount: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    DollarsPerPoint: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Threshold: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    GiftOnlyFromClub: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
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
    clDateModified: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    HOClubID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ClubGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Club',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Club$CacheLookup",
        fields: [
          { name: "clDateModified" },
          { name: "ClubGuid" },
        ]
      },
      {
        name: "Club$clDateModified",
        fields: [
          { name: "clDateModified" },
        ]
      },
      {
        name: "Club$ClubGuid",
        fields: [
          { name: "ClubGuid" },
        ]
      },
      {
        name: "Club$ClubID",
        fields: [
          { name: "ClubID" },
        ]
      },
      {
        name: "Club$PrimaryKey",
        unique: true,
        fields: [
          { name: "ClubID" },
        ]
      },
    ]
  });
};
