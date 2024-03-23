const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LookupAddress', {
    LookupAddressID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    HouseNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    StreetName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Suburb: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    City: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    PostCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    xLocation: {
      type: DataTypes.REAL,
      allowNull: true
    },
    yLocation: {
      type: DataTypes.REAL,
      allowNull: true
    },
    LookupAddressDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LookupAddressGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'LookupAddress',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "LookupAddress$City",
        fields: [
          { name: "City" },
        ]
      },
      {
        name: "LookupAddress$Streetname",
        fields: [
          { name: "StreetName" },
        ]
      },
      {
        name: "LookupAddress$Suburb",
        fields: [
          { name: "Suburb" },
        ]
      },
      {
        name: "PK_LookupAddress",
        unique: true,
        fields: [
          { name: "LookupAddressID" },
        ]
      },
    ]
  });
};
