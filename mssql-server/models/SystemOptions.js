const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SystemOptions', {
    ScriptNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    ReceiptID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    InvoiceNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    SerialNumberG: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SerialNumberC: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SerialNumberR: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SerialNumberE: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SerialNumberD: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ClaimNumber: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    RollingStockID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    RollingDrugID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    EndDayID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    GeneralWholesalerID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PLU: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ScheduleDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Banks: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CreditCards: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SystemOptionsID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    SystemOptionsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SystemOptionsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SystemOptions',
    schema: 'dbo',
    timestamps: false
  });
};
