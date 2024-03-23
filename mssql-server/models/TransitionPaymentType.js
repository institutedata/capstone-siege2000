const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TransitionPaymentType', {
    TransitionPaymentTypeID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TransitionPaymentType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TransitionPaymentTypeGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    TransitionPaymentTypeDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tptMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'TransitionPaymentType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TransitionPaymentType",
        unique: true,
        fields: [
          { name: "TransitionPaymentTypeID" },
        ]
      },
      {
        name: "TransitionPaymentType$CacheLookup",
        fields: [
          { name: "TransitionPaymentTypeDateModified" },
          { name: "TransitionPaymentTypeGuid" },
        ]
      },
      {
        name: "TransitionPaymentType$TransitionPaymentTypeGuid",
        fields: [
          { name: "TransitionPaymentTypeGuid" },
        ]
      },
    ]
  });
};
