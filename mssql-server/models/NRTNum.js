const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NRTNum', {
    NRTNumID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NRTNum: {
      type: DataTypes.STRING(10),
      allowNull: true
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
    NrtNumGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    NrtNumDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'NRTNum',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "NrtNum$CacheLookup",
        fields: [
          { name: "NrtNumDateModified" },
          { name: "NrtNumGuid" },
        ]
      },
      {
        name: "NRTNum$NRTNum",
        fields: [
          { name: "NRTNum" },
        ]
      },
      {
        name: "NrtNum$NrtNumGuid",
        fields: [
          { name: "NrtNumGuid" },
        ]
      },
      {
        name: "NRTNum$NRTNumID",
        unique: true,
        fields: [
          { name: "NRTNumID" },
        ]
      },
      {
        name: "NRTNum$PersonID",
        fields: [
          { name: "PersonID" },
        ]
      },
      {
        name: "NRTNum$PrimaryKey",
        unique: true,
        fields: [
          { name: "NRTNumID" },
        ]
      },
    ]
  });
};
