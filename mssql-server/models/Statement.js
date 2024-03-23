const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Statement', {
    StatementID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    ClosingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ClosingBalance: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    AccountID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Account',
        key: 'AccountID'
      }
    },
    StatementGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    StatementDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    stSentToXero: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Current: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Month1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Month2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Month3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Older: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    StatementAged: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    MTDStatement: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'Statement',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Statement$AccountID",
        fields: [
          { name: "AccountID" },
        ]
      },
      {
        name: "Statement$CacheLookup",
        fields: [
          { name: "StatementDateModified" },
          { name: "StatementGuid" },
        ]
      },
      {
        name: "Statement$IvoiceID",
        unique: true,
        fields: [
          { name: "StatementID" },
        ]
      },
      {
        name: "Statement$PrimaryKey",
        unique: true,
        fields: [
          { name: "StatementID" },
        ]
      },
      {
        name: "Statement$StatementGuid",
        fields: [
          { name: "StatementGuid" },
        ]
      },
    ]
  });
};
