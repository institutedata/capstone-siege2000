const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('InternetTag', {
    InternetTagID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    InternetTag: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    itDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    InternetTagGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    InternetTagDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    itMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    InternetTagTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    InternetTagRulesID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'InternetTag',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "InternetTag$CacheLookup",
        fields: [
          { name: "InternetTagDateModified" },
          { name: "InternetTagGuid" },
        ]
      },
      {
        name: "InternetTag$InternetTagGuid",
        fields: [
          { name: "InternetTagGuid" },
        ]
      },
      {
        name: "PK_InternetTag",
        unique: true,
        fields: [
          { name: "InternetTagID" },
        ]
      },
    ]
  });
};
