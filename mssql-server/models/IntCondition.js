const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IntCondition', {
    ConditionID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Conditions',
        key: 'ConditionID'
      }
    },
    PersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    IntConditionID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IntConditionGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    IntConditionDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'IntCondition',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IntCondition$CacheLookup",
        fields: [
          { name: "IntConditionDateModified" },
          { name: "IntConditionGuid" },
        ]
      },
      {
        name: "IntCondition$ConditionID",
        fields: [
          { name: "ConditionID" },
        ]
      },
      {
        name: "IntCondition$IntConditionGuid",
        fields: [
          { name: "IntConditionGuid" },
        ]
      },
      {
        name: "IntCondition$PersonID",
        fields: [
          { name: "PersonID" },
        ]
      },
      {
        name: "PK_IntCondition",
        unique: true,
        fields: [
          { name: "IntConditionID" },
        ]
      },
    ]
  });
};
