const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ReposMsg', {
    ReposID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ReposMsg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ReposMsgGUID: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    rmDateUpdated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    rmDateCreated: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ReposMsg',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ReposMsg$PrimaryKey",
        unique: true,
        fields: [
          { name: "ReposID" },
        ]
      },
      {
        name: "ReposMsg$ReposID",
        fields: [
          { name: "ReposID" },
        ]
      },
      {
        name: "ReposMsg$ReposMsgGUID",
        fields: [
          { name: "ReposMsgGUID" },
        ]
      },
    ]
  });
};
