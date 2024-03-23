const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Purpose', {
    PurposeID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Purpose: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    purDateModified: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    purLTC: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    purGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PurposeTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    purConditionID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Conditions',
        key: 'ConditionID'
      }
    },
    purMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'Purpose',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Purpose$PrimaryKey",
        unique: true,
        fields: [
          { name: "PurposeID" },
        ]
      },
      {
        name: "Purpose$purDateModified",
        fields: [
          { name: "purDateModified" },
        ]
      },
      {
        name: "Purpose$Purpose",
        fields: [
          { name: "Purpose" },
        ]
      },
      {
        name: "Purpose$PurposeID",
        fields: [
          { name: "PurposeID" },
        ]
      },
    ]
  });
};
