const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TherapGroupToCondition', {
    TherapGroupToConditionID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tgcTherapGroupID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    tgcConditionID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'Conditions',
        key: 'ConditionID'
      }
    },
    TherapGroupToConditionGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    TherapGroupToConditionDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TherapGroupToCondition',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TherapGroupToCondition",
        unique: true,
        fields: [
          { name: "TherapGroupToConditionID" },
        ]
      },
    ]
  });
};
