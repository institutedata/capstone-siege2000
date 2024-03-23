const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StateName', {
    StateID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    StateName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    StateAbbrev: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    snCountryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    snMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    snDateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    snDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    StateNameGuid: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'StateName',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__StateNam__C3BA3B5AAE0E21C0",
        unique: true,
        fields: [
          { name: "StateID" },
        ]
      },
    ]
  });
};
