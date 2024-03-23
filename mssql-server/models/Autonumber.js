const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Autonumber', {
    FieldName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Autonumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'Autonumber',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Autonumber$FieldName",
        unique: true,
        fields: [
          { name: "FieldName" },
        ]
      },
      {
        name: "Autonumber$PrimaryKey",
        unique: true,
        fields: [
          { name: "FieldName" },
        ]
      },
    ]
  });
};
