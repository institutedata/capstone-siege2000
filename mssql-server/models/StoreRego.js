const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StoreRego', {
    StoreRegoField: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    StoreRegoDetails: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    StoreRegoID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    StoreRegoGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    StoreRegoDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'StoreRego',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "StoreRego$CacheLookup",
        fields: [
          { name: "StoreRegoDateModified" },
          { name: "StoreRegoGuid" },
        ]
      },
      {
        name: "StoreRego$PrimaryKey",
        unique: true,
        fields: [
          { name: "StoreRegoField" },
        ]
      },
      {
        name: "StoreRego$StoreRegoGuid",
        fields: [
          { name: "StoreRegoGuid" },
        ]
      },
    ]
  });
};
