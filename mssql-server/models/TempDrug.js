const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TempDrug', {
    PDE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    BrandName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    GenericName: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TempDrug',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "TempDrug$PDE",
        unique: true,
        fields: [
          { name: "PDE" },
        ]
      },
    ]
  });
};
