const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EndOfDayCurrency', {
    edcEndOfDayID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    edcAvaliableCurrencyID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    EndOfDayCurrencyID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    EndOfDayCurrencyGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    EndOfDayCurrencyDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    StartFloat: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    EndFloat: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    TotalCashInTill: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'EndOfDayCurrency',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "EndOfDayCurrency$CacheLookup",
        fields: [
          { name: "EndOfDayCurrencyDateModified" },
          { name: "EndOfDayCurrencyGuid" },
        ]
      },
      {
        name: "EndOfDayCurrency$edcAvaliableCurrencyID",
        fields: [
          { name: "edcAvaliableCurrencyID" },
        ]
      },
      {
        name: "EndOfDayCurrency$edcEndOfDayID",
        fields: [
          { name: "edcEndOfDayID" },
        ]
      },
      {
        name: "EndOfDayCurrency$EndOfDayCurrencyGuid",
        fields: [
          { name: "EndOfDayCurrencyGuid" },
        ]
      },
      {
        name: "PK_EndOfDayCurrency",
        unique: true,
        fields: [
          { name: "EndOfDayCurrencyID" },
        ]
      },
    ]
  });
};
