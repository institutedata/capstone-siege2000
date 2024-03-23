const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Film', {
    FilmID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FilmNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    StaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    ProcessID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'FilmProcess',
        key: 'ProcessID'
      }
    },
    ServiceID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'FilmService',
        key: 'ServiceID'
      }
    },
    DetailsID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'FilmDetails',
        key: 'DetailsID'
      }
    },
    DropIn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PickUp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Valid: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Comments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FilmGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FilmDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Film',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Film$CacheLookup",
        fields: [
          { name: "FilmDateModified" },
          { name: "FilmGuid" },
        ]
      },
      {
        name: "Film$FilmGuid",
        fields: [
          { name: "FilmGuid" },
        ]
      },
      {
        name: "Film$FilmID",
        fields: [
          { name: "FilmID" },
        ]
      },
      {
        name: "Film$PersonID",
        fields: [
          { name: "PersonID" },
        ]
      },
      {
        name: "Film$PrimaryKey",
        unique: true,
        fields: [
          { name: "FilmID" },
        ]
      },
      {
        name: "Film$ProcessID",
        fields: [
          { name: "ProcessID" },
        ]
      },
      {
        name: "Film$ServiceID1",
        fields: [
          { name: "ServiceID" },
        ]
      },
      {
        name: "Film$StaffID",
        fields: [
          { name: "StaffID" },
        ]
      },
    ]
  });
};
