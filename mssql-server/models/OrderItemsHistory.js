const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OrderItemsHistory', {
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    StockID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Comment: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QtyDelivered: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    InvoiceItemID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DateCreated: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    DateDelivered: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ORDERITEMSHISTORYID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    ORDERITEMSHISTORYGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ORDERITEMSHISTORYDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'OrderItemsHistory',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ORDERITEMSHISTORY$CacheLookup",
        fields: [
          { name: "ORDERITEMSHISTORYDateModified" },
          { name: "ORDERITEMSHISTORYGuid" },
        ]
      },
      {
        name: "OrderItemsHistory$InvoiceItemID",
        fields: [
          { name: "InvoiceItemID" },
        ]
      },
      {
        name: "OrderItemsHistory$OrderID",
        fields: [
          { name: "OrderID" },
        ]
      },
      {
        name: "ORDERITEMSHISTORY$ORDERITEMSHISTORYGuid",
        fields: [
          { name: "ORDERITEMSHISTORYGuid" },
        ]
      },
      {
        name: "OrderItemsHistory$PrimaryKey",
        unique: true,
        fields: [
          { name: "OrderID" },
          { name: "StockID" },
        ]
      },
      {
        name: "OrderItemsHistory$StockID",
        fields: [
          { name: "StockID" },
        ]
      },
    ]
  });
};
