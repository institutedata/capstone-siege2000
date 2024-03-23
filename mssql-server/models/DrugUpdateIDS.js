const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DrugUpdateIDS', {
    DrugUpdateID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'DrugUpdateIDS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DrugUpdateIDS",
        unique: true,
        fields: [
          { name: "DrugUpdateID" },
        ]
      },
    ]
  });
};
