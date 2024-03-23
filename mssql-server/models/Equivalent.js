const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Equivalent', {
    DrugID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    EquivalentID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'Equivalent',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Equivalent$DrugID",
        fields: [
          { name: "DrugID" },
        ]
      },
      {
        name: "Equivalent$PrimaryKey",
        unique: true,
        fields: [
          { name: "EquivalentID" },
        ]
      },
    ]
  });
};
