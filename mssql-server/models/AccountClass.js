const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AccountClass', {
    AccountClassId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ClassDescription: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AccountClassGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    AccountClassDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AccountClass',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "AccountClass$AccountClassGuid",
        fields: [
          { name: "AccountClassGuid" },
        ]
      },
      {
        name: "AccountClass$AccountClassId",
        fields: [
          { name: "AccountClassId" },
        ]
      },
      {
        name: "AccountClass$CacheLookup",
        fields: [
          { name: "AccountClassDateModified" },
          { name: "AccountClassGuid" },
        ]
      },
      {
        name: "AccountClass$ClassDescription",
        unique: true,
        fields: [
          { name: "ClassDescription" },
        ]
      },
      {
        name: "AccountClass$PrimaryKey",
        unique: true,
        fields: [
          { name: "AccountClassId" },
        ]
      },
    ]
  });
};
