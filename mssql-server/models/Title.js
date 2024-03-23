const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Title', {
    TitleID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Title: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    TitleGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    TitleDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Title',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Title$CacheLookup",
        fields: [
          { name: "TitleDateModified" },
          { name: "TitleGuid" },
        ]
      },
      {
        name: "Title$PrimaryKey",
        unique: true,
        fields: [
          { name: "TitleID" },
        ]
      },
      {
        name: "Title$Title",
        fields: [
          { name: "Title" },
        ]
      },
      {
        name: "Title$TitleGuid",
        fields: [
          { name: "TitleGuid" },
        ]
      },
    ]
  });
};
