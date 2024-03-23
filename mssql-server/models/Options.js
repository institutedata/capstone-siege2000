const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Options', {
    VBName: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Value: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Options',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Options$PrimaryKey",
        unique: true,
        fields: [
          { name: "VBName" },
        ]
      },
    ]
  });
};
