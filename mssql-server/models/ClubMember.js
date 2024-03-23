const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ClubMember', {
    ClubID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    PersonID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    ClubMemberID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    ClubMemberGuid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ClubMemberDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ClubMember',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ClubMember$CacheLookup",
        fields: [
          { name: "ClubMemberDateModified" },
          { name: "ClubMemberGuid" },
        ]
      },
      {
        name: "ClubMember$ClubID",
        fields: [
          { name: "ClubID" },
        ]
      },
      {
        name: "ClubMember$ClubMemberGuid",
        fields: [
          { name: "ClubMemberGuid" },
        ]
      },
      {
        name: "ClubMember$PersonID",
        fields: [
          { name: "PersonID" },
        ]
      },
      {
        name: "ClubMember$PrimaryKey",
        unique: true,
        fields: [
          { name: "ClubID" },
          { name: "PersonID" },
        ]
      },
    ]
  });
};
