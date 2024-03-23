const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ForiegnExchange', {
    Currency: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Rate: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    FORIEGNEXCHANGEID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FORIEGNEXCHANGEGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FORIEGNEXCHANGEDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ForiegnExchange',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FORIEGNEXCHANGE$CacheLookup",
        fields: [
          { name: "FORIEGNEXCHANGEDateModified" },
          { name: "FORIEGNEXCHANGEGuid" },
        ]
      },
      {
        name: "FORIEGNEXCHANGE$FORIEGNEXCHANGEGuid",
        fields: [
          { name: "FORIEGNEXCHANGEGuid" },
        ]
      },
      {
        name: "PK_ForiegnExchange",
        unique: true,
        fields: [
          { name: "FORIEGNEXCHANGEID" },
        ]
      },
    ]
  });
};
