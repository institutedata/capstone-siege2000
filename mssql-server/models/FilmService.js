const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FilmService', {
    ServiceID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Service: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FilmServiceGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FilmServiceDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'FilmService',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FilmService$CacheLookup",
        fields: [
          { name: "FilmServiceDateModified" },
          { name: "FilmServiceGuid" },
        ]
      },
      {
        name: "FilmService$FilmServiceGuid",
        fields: [
          { name: "FilmServiceGuid" },
        ]
      },
      {
        name: "FilmService$PrimaryKey",
        unique: true,
        fields: [
          { name: "ServiceID" },
        ]
      },
      {
        name: "FilmService$ServiceID",
        fields: [
          { name: "ServiceID" },
        ]
      },
    ]
  });
};
