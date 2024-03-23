const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Debit', {
    DebitID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DebtorID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ScriptID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CardID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Actiontype: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    DebitAmount: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    DebitDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DebitGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DebitDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Debit',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Debit$CacheLookup",
        fields: [
          { name: "DebitDateModified" },
          { name: "DebitGuid" },
        ]
      },
      {
        name: "Debit$DebitGuid",
        fields: [
          { name: "DebitGuid" },
        ]
      },
      {
        name: "Debit$PrimaryKey",
        unique: true,
        fields: [
          { name: "DebitID" },
        ]
      },
    ]
  });
};
