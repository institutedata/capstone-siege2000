const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SpecialHOGroups', {
    SpecialHOGroupsID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sgSpecialID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Special',
        key: 'SpecialID'
      }
    },
    sgHOGroupID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'HeadOfficeGroups',
        key: 'GroupID'
      }
    },
    SpecialHOGroupsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SpecialHOGroupsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SpecialHOGroups',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SpecialHOGroups$CacheLookup",
        fields: [
          { name: "SpecialHOGroupsDateModified" },
          { name: "SpecialHOGroupsGuid" },
        ]
      },
      {
        name: "SpecialHOGroups$Lookup",
        unique: true,
        fields: [
          { name: "sgSpecialID" },
          { name: "sgHOGroupID" },
        ]
      },
      {
        name: "SpecialHOGroups$PrimaryKey",
        unique: true,
        fields: [
          { name: "SpecialHOGroupsID" },
        ]
      },
      {
        name: "SpecialHOGroups$SpecialHOGroupsGuid",
        fields: [
          { name: "SpecialHOGroupsGuid" },
        ]
      },
    ]
  });
};
