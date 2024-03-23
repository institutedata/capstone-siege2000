const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PersonEthnicGroups', {
    PersonEthnicGroupsID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PersonEthnicGroups_PersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    PersonEthnicGroups_EthinicGroupID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'EthnicGroup',
        key: 'EthnicGroupID'
      }
    },
    PersonEthnicGroupsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PersonEthnicGroupsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PersonEthnicGroups',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PersonEthnicGroups$CacheLookup",
        fields: [
          { name: "PersonEthnicGroupsDateModified" },
          { name: "PersonEthnicGroupsGuid" },
        ]
      },
      {
        name: "PersonEthnicGroups$Person$EthinicGroup",
        unique: true,
        fields: [
          { name: "PersonEthnicGroups_PersonID" },
          { name: "PersonEthnicGroups_EthinicGroupID" },
        ]
      },
      {
        name: "PersonEthnicGroups$PersonEthnicGroupsGuid",
        fields: [
          { name: "PersonEthnicGroupsGuid" },
        ]
      },
      {
        name: "PersonEthnicGroups$PrimaryKey",
        unique: true,
        fields: [
          { name: "PersonEthnicGroupsID" },
        ]
      },
    ]
  });
};
