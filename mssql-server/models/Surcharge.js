const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Surcharge', {
    SurchargeID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CreditCardName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Surcharge: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    SurchargeGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SurchargeDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Surcharge',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Surcharge$CacheLookup",
        fields: [
          { name: "SurchargeDateModified" },
          { name: "SurchargeGuid" },
        ]
      },
      {
        name: "Surcharge$PrimaryKey",
        unique: true,
        fields: [
          { name: "SurchargeID" },
        ]
      },
      {
        name: "Surcharge$SuchargeID",
        fields: [
          { name: "SurchargeID" },
        ]
      },
      {
        name: "Surcharge$SupplierSettingsGuid",
        fields: [
          { name: "SurchargeGuid" },
        ]
      },
    ]
  });
};
