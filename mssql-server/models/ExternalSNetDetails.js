const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ExternalSNetDetails', {
    ExternalSNetDetailsID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ExtPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    ExtSNetValue: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ExtSNetValueDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ExtSNetCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ExtSNetCountDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ExtSNetDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ExternalSNetDetailsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ExternalSNetDetailsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ExternalSNetDetails',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ExternalSNetDetails$CacheLookup",
        fields: [
          { name: "ExternalSNetDetailsDateModified" },
          { name: "ExternalSNetDetailsGuid" },
        ]
      },
      {
        name: "ExternalSNetDetails$ExternalSNetDetailsGuid",
        fields: [
          { name: "ExternalSNetDetailsGuid" },
        ]
      },
      {
        name: "ExternalSNetDetails$ExternalSNetDetailsID",
        fields: [
          { name: "ExternalSNetDetailsID" },
        ]
      },
      {
        name: "ExternalSNetDetails$ExtPersonID",
        fields: [
          { name: "ExtPersonID" },
        ]
      },
      {
        name: "ExternalSNetDetails$PrimaryKey",
        unique: true,
        fields: [
          { name: "ExternalSNetDetailsID" },
        ]
      },
    ]
  });
};
