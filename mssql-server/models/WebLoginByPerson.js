const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WebLoginByPerson', {
    WebLoginByPersonID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    WebloginName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    WebloginCode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    wliPersonID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    WebLoginByPersonGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    WebLoginByPersonDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    WebLoginStatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'WebLoginByPerson',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_WebLoginByPerson",
        unique: true,
        fields: [
          { name: "WebLoginByPersonID" },
        ]
      },
      {
        name: "WebLoginByPerson$CacheLookup",
        fields: [
          { name: "WebLoginByPersonDateModified" },
          { name: "WebLoginByPersonGuid" },
        ]
      },
      {
        name: "WebLoginByPerson$WebLoginByPersonGuid",
        fields: [
          { name: "WebLoginByPersonGuid" },
        ]
      },
    ]
  });
};
