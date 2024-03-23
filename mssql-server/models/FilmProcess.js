const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FilmProcess', {
    ProcessID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ProcessName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Display: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    FilmProcessGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FilmProcessDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'FilmProcess',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FilmProcess$CacheLookup",
        fields: [
          { name: "FilmProcessDateModified" },
          { name: "FilmProcessGuid" },
        ]
      },
      {
        name: "FilmProcess$FilmBagID",
        fields: [
          { name: "ProcessID" },
        ]
      },
      {
        name: "FilmProcess$FilmProcessGuid",
        fields: [
          { name: "FilmProcessGuid" },
        ]
      },
      {
        name: "FilmProcess$PrimaryKey",
        unique: true,
        fields: [
          { name: "ProcessID" },
        ]
      },
    ]
  });
};
