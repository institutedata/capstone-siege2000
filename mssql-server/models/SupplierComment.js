const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SupplierComment', {
    SupplierCommentID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SupplierComment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SupplierCommentGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SupplierCommentDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SupplierComment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SupplierComment",
        unique: true,
        fields: [
          { name: "SupplierCommentID" },
        ]
      },
      {
        name: "SupplierComment$CacheLookup",
        fields: [
          { name: "SupplierCommentDateModified" },
          { name: "SupplierCommentGuid" },
        ]
      },
      {
        name: "SupplierComment$SupplierCommentGuid",
        fields: [
          { name: "SupplierCommentGuid" },
        ]
      },
    ]
  });
};
