const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LOTSDrug', {
    Pharmacode: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    DrugID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TradeName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    GenericName: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'LOTSDrug',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "LOTSDrug$Pharmacode",
        unique: true,
        fields: [
          { name: "Pharmacode" },
        ]
      },
    ]
  });
};
