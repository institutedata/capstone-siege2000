const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EthnicGroup', {
    EthnicGroupID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EthnicGroup: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ecMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    EthnicGroupGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    EthnicGroupDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'EthnicGroup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "EthnicGroup$CacheLookup",
        fields: [
          { name: "EthnicGroupDateModified" },
          { name: "EthnicGroupGuid" },
        ]
      },
      {
        name: "EthnicGroup$EthnicGroup",
        unique: true,
        fields: [
          { name: "EthnicGroup" },
        ]
      },
      {
        name: "EthnicGroup$EthnicGroupGuid",
        fields: [
          { name: "EthnicGroupGuid" },
        ]
      },
      {
        name: "PK_EthnicGroup",
        unique: true,
        fields: [
          { name: "EthnicGroupID" },
        ]
      },
    ]
  });
};
