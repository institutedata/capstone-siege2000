const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('KioskScriptBasket', {
    KioskScriptBasketID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    KioskScriptBasketGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    KioskScriptBasketDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ksbStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    KioskScriptBasketDateCreated: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'KioskScriptBasket',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "KioskScriptBasket$KioskScriptBasketDateCreated",
        fields: [
          { name: "KioskScriptBasketDateCreated" },
        ]
      },
      {
        name: "KioskScriptBasket$PrimaryKey",
        unique: true,
        fields: [
          { name: "KioskScriptBasketID" },
        ]
      },
    ]
  });
};
