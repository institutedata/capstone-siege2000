const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Conditions', {
    ConditionID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SpecialCondition: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    AdminOnly: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    DispOnly: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    scLTC: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    scGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    scDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ConditionTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ShowPOS: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    MasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    GivesNoLTCPoints: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ParentConditionID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'Conditions',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Conditions$PrimaryKey",
        unique: true,
        fields: [
          { name: "ConditionID" },
        ]
      },
    ]
  });
};
