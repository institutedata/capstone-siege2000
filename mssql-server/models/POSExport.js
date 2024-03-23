const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('POSExport', {
    Productdescription: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PLU: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SOH: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'POSExport',
    schema: 'dbo',
    timestamps: false
  });
};
