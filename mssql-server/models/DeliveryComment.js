const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DeliveryComment', {
    DeliveryCommentID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DeliveryComment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DeliveryCommentGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DeliveryCommentDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DeliveryComment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "DeliveryComment$CacheLookup",
        fields: [
          { name: "DeliveryCommentDateModified" },
          { name: "DeliveryCommentGuid" },
        ]
      },
      {
        name: "DeliveryComment$DeliveryCommentGuid",
        fields: [
          { name: "DeliveryCommentGuid" },
        ]
      },
      {
        name: "DeliveryComment$PrimaryKey",
        unique: true,
        fields: [
          { name: "DeliveryCommentID" },
        ]
      },
    ]
  });
};
