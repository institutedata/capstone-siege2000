const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TransitionPayment', {
    TransitionPaymentID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tpMonth: {
      type: DataTypes.DATE,
      allowNull: false
    },
    TransitionPayment: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TransitionPaymentGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    TransitionPaymentDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpPaymentTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TransitionPaymentType: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TransitionPayment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TransitionPayment",
        unique: true,
        fields: [
          { name: "TransitionPaymentID" },
        ]
      },
      {
        name: "TransitionPayment$CacheLookup",
        fields: [
          { name: "TransitionPaymentDateModified" },
          { name: "TransitionPaymentGuid" },
        ]
      },
      {
        name: "TransitionPayment$TransitionPaymentGuid",
        fields: [
          { name: "TransitionPaymentGuid" },
        ]
      },
    ]
  });
};
