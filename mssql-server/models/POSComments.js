const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('POSComments', {
    POSCommentID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CommentDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    POSComment: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    POSCommentsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    POSCommentsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'POSComments',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "POSComments$CacheLookup",
        fields: [
          { name: "POSCommentsDateModified" },
          { name: "POSCommentsGuid" },
        ]
      },
      {
        name: "POSComments$Comment",
        fields: [
          { name: "POSComment" },
        ]
      },
      {
        name: "POSComments$CommentDate",
        fields: [
          { name: "CommentDate" },
        ]
      },
      {
        name: "POSComments$POSCommentsGuid",
        fields: [
          { name: "POSCommentsGuid" },
        ]
      },
      {
        name: "POSComments$PrimaryKey",
        unique: true,
        fields: [
          { name: "POSCommentID" },
        ]
      },
    ]
  });
};
