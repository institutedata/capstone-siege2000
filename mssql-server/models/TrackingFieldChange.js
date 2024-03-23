const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TrackingFieldChange', {
    StockID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NewValue: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OldValue: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FieldName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SQL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TrackingFieldChangeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    TrackingFieldChangeGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    TrackingFieldChangeDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TrackingFieldChange',
    schema: 'dbo',
    timestamps: false
  });
};
