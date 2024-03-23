const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ConvSOH', {
    Pharmacode: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    SOH: {
      type: DataTypes.REAL,
      allowNull: true
    },
    ValidPharmacode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'ConvSOH',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ConvSOH$Pharmacode",
        unique: true,
        fields: [
          { name: "Pharmacode" },
        ]
      },
    ]
  });
};
