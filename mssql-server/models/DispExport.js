const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DispExport', {
    PCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Product: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Locn: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Pack: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Manf: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Stock: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Adj: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Price: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Value: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DispExport',
    schema: 'dbo',
    timestamps: false
  });
};
