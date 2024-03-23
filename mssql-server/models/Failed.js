const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Failed', {
    FailedID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ScriptID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Script',
        key: 'ScriptID'
      }
    },
    ClaimID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Claim',
        key: 'ClaimID'
      }
    },
    Reason: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FailedGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FailedDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Failed',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Failed$CacheLookup",
        fields: [
          { name: "FailedDateModified" },
          { name: "FailedGuid" },
        ]
      },
      {
        name: "Failed$FailedGuid",
        fields: [
          { name: "FailedGuid" },
        ]
      },
      {
        name: "Failed$FailedID",
        fields: [
          { name: "FailedID" },
        ]
      },
      {
        name: "Failed$PrimaryKey",
        unique: true,
        fields: [
          { name: "FailedID" },
        ]
      },
      {
        name: "Failed$ScriptID",
        fields: [
          { name: "ScriptID" },
        ]
      },
    ]
  });
};
