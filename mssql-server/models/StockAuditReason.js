const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StockAuditReason', {
    StockAuditReasonID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    StockAuditReason: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    StockAuditReasonGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    StockAuditReasonDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'StockAuditReason',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "StockAuditReason$CacheLookup",
        fields: [
          { name: "StockAuditReasonDateModified" },
          { name: "StockAuditReasonGuid" },
        ]
      },
      {
        name: "StockAuditReason$PrimaryKey",
        unique: true,
        fields: [
          { name: "StockAuditReasonID" },
        ]
      },
      {
        name: "StockAuditReason$StockAuditReason",
        unique: true,
        fields: [
          { name: "StockAuditReason" },
        ]
      },
      {
        name: "StockAuditReason$StockAuditReasonGuid",
        fields: [
          { name: "StockAuditReasonGuid" },
        ]
      },
      {
        name: "StockAuditReason$StockAuditReasonID",
        fields: [
          { name: "StockAuditReasonID" },
        ]
      },
    ]
  });
};
