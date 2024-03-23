const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ClaimResponseItem', {
    ClaimItemID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    ClaimHeaderID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    TransactionCategory: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PrescriptionNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PrescriptionSuffix: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    AmountPaid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    AmountClaimed: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Error1: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    Error2: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    Error3: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ItemVariance: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    crScriptID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    QtyPaid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Corrected: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    criCosID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ClaimResponseItem',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ClaimResponseItem$AmountPaid",
        fields: [
          { name: "AmountPaid" },
        ]
      },
      {
        name: "ClaimResponseItem$ClaimDetailID",
        fields: [
          { name: "ClaimItemID" },
        ]
      },
      {
        name: "ClaimResponseItem$ClaimHeaderID",
        fields: [
          { name: "ClaimHeaderID" },
        ]
      },
      {
        name: "ClaimResponseItem$crScriptID",
        fields: [
          { name: "crScriptID" },
        ]
      },
      {
        name: "ClaimResponseItem$PrescriptionNumber",
        fields: [
          { name: "PrescriptionNumber" },
        ]
      },
      {
        name: "ClaimResponseItem$PrescriptionSuffix",
        fields: [
          { name: "PrescriptionSuffix" },
        ]
      },
      {
        name: "ClaimResponseItem$PrimaryKey",
        unique: true,
        fields: [
          { name: "ClaimItemID" },
        ]
      },
      {
        name: "ClaimResponseItem$QtyPaid",
        fields: [
          { name: "QtyPaid" },
        ]
      },
    ]
  });
};
