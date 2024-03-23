const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SuperSIG', {
    SIG: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    SIGTranslation: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    SuperSIgID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    SuperSigGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SuperSigDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SuperSIG',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SuperSig$CacheLookup",
        fields: [
          { name: "SuperSigDateModified" },
          { name: "SuperSigGuid" },
        ]
      },
      {
        name: "SuperSIG$PrimaryKey",
        unique: true,
        fields: [
          { name: "SIG" },
        ]
      },
      {
        name: "SuperSig$SuperSigGuid",
        fields: [
          { name: "SuperSigGuid" },
        ]
      },
      {
        name: "SuperSig$SuperSigID",
        unique: true,
        fields: [
          { name: "SuperSIgID" },
        ]
      },
    ]
  });
};
