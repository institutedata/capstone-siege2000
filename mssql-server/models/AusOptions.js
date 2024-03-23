const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AusOptions', {
    VBName: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Value: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AusOptions',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "AusOptions$PrimaryKey",
        unique: true,
        fields: [
          { name: "VBName" },
        ]
      },
      {
        name: "AusOptions$VBName",
        fields: [
          { name: "VBName" },
        ]
      },
    ]
  });
};
