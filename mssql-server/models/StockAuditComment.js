const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StockAuditComment', {
    StockAuditCommentID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    StockAuditComment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    StockAuditCommentGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    StockAuditCommentDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'StockAuditComment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "StockAuditComment$CacheLookup",
        fields: [
          { name: "StockAuditCommentDateModified" },
          { name: "StockAuditCommentGuid" },
        ]
      },
      {
        name: "StockAuditComment$PrimaryKey",
        unique: true,
        fields: [
          { name: "StockAuditCommentID" },
        ]
      },
      {
        name: "StockAuditComment$StockAuditCommentGuid",
        fields: [
          { name: "StockAuditCommentGuid" },
        ]
      },
    ]
  });
};
