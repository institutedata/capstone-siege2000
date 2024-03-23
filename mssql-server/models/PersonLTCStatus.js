const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PersonLTCStatus', {
    PersonLTCStatusID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PersonLTCStatus: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PersonLTCStatusGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PersonLTCStatusDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PersonLTCStatusDateCreated: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PersonLTCStatus',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PersonLTCStatus$CacheLookup",
        fields: [
          { name: "PersonLTCStatusDateModified" },
          { name: "PersonLTCStatusGuid" },
        ]
      },
      {
        name: "PersonLTCStatus$PersonLTCStatusGuid",
        fields: [
          { name: "PersonLTCStatusGuid" },
        ]
      },
      {
        name: "PersonLTCStatus$PrimaryKey",
        unique: true,
        fields: [
          { name: "PersonLTCStatusID" },
        ]
      },
    ]
  });
};
