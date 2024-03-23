const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OrderItemToScript', {
    OrderItemToScriptID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    oisScriptID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Script',
        key: 'ScriptID'
      }
    },
    oisOrderItemID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'OrderItems',
        key: 'OrderItemsID'
      }
    },
    OrderItemToScriptGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    OrderItemToScriptDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'OrderItemToScript',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "OrderItemToScript$CacheLookup",
        fields: [
          { name: "OrderItemToScriptDateModified" },
          { name: "OrderItemToScriptGuid" },
        ]
      },
      {
        name: "OrderItemToScript$OrderItemToScriptGuid",
        fields: [
          { name: "OrderItemToScriptGuid" },
        ]
      },
      {
        name: "PK_OrderItemToScript",
        unique: true,
        fields: [
          { name: "OrderItemToScriptID" },
        ]
      },
    ]
  });
};
