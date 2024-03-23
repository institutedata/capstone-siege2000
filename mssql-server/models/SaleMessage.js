const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SaleMessage', {
    SaleMessageID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    smSaleID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Sales',
        key: 'SaleID'
      }
    },
    SaleMessageSystem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PrintedMessage: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    SaleMessageGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SaleMessageDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SaleMessage: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ""
    },
    SaleMessageType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'SaleMessage',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SaleMessage",
        unique: true,
        fields: [
          { name: "SaleMessageID" },
        ]
      },
      {
        name: "SaleMessage$CacheLookup",
        fields: [
          { name: "SaleMessageDateModified" },
          { name: "SaleMessageGuid" },
        ]
      },
      {
        name: "SaleMessage$SaleID",
        fields: [
          { name: "smSaleID" },
        ]
      },
      {
        name: "SaleMessage$SaleMessageGuid",
        fields: [
          { name: "SaleMessageGuid" },
        ]
      },
    ]
  });
};
