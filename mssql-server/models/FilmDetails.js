const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FilmDetails', {
    DetailsID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Brand: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Exposure: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Size: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Display: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    FilmDetailsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FilmDetailsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'FilmDetails',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FilmDetails$CacheLookup",
        fields: [
          { name: "FilmDetailsDateModified" },
          { name: "FilmDetailsGuid" },
        ]
      },
      {
        name: "FilmDetails$DetailsID",
        fields: [
          { name: "DetailsID" },
        ]
      },
      {
        name: "FilmDetails$FilmDetailsGuid",
        fields: [
          { name: "FilmDetailsGuid" },
        ]
      },
      {
        name: "FilmDetails$PrimaryKey",
        unique: true,
        fields: [
          { name: "DetailsID" },
        ]
      },
    ]
  });
};
