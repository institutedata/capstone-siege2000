const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Orders', {
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    OrderTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    StaffName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Direct: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    SupplierID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    OrderPeriod: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Ordered: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Delivered: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    OrderValue: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    IBT: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Outgoing: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    UserComments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    State: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DateDelivered: {
      type: DataTypes.DATE,
      allowNull: true
    },
    InternetID: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    MasterOrderID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ordStockLocationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    OrderNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AnswerbackAttempts: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    OrderOpen: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ordTransferStockLocationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DateToSend: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UserCommentID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DeliveryCommentID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ordDateUpdated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    BranchVPN_BranchID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OrdersGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    OrdersDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PharmxOrderID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ordLastAttempt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PharmxConfirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ordStockTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ordProductGroupID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ordProductClassID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ordOrderType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ordSpecialID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ReorderFile: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    CreateStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    OrderedStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    TimeOrderSend: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OrderDueDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Orders',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Orders$AnswerbackAttempts",
        fields: [
          { name: "AnswerbackAttempts" },
        ]
      },
      {
        name: "Orders$CacheLookup",
        fields: [
          { name: "OrdersDateModified" },
          { name: "OrdersGuid" },
        ]
      },
      {
        name: "Orders$DateToSend",
        fields: [
          { name: "DateToSend" },
        ]
      },
      {
        name: "Orders$Delivered",
        fields: [
          { name: "Delivered" },
        ]
      },
      {
        name: "Orders$InternetID",
        fields: [
          { name: "InternetID" },
        ]
      },
      {
        name: "Orders$MasterOrderID",
        fields: [
          { name: "MasterOrderID" },
        ]
      },
      {
        name: "Orders$OrdersGuid",
        fields: [
          { name: "OrdersGuid" },
        ]
      },
      {
        name: "Orders$OrderTime",
        fields: [
          { name: "OrderTime" },
        ]
      },
      {
        name: "Orders$PrimaryKey",
        unique: true,
        fields: [
          { name: "OrderID" },
        ]
      },
      {
        name: "Orders$State",
        fields: [
          { name: "State" },
        ]
      },
      {
        name: "Orders$SupplierID",
        fields: [
          { name: "SupplierID" },
        ]
      },
    ]
  });
};
