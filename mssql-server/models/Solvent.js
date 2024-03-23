const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Solvent', {
    SolventID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Solvent: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Price: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SolventGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SolventDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Solvent',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Solvent$CacheLookup",
        fields: [
          { name: "SolventDateModified" },
          { name: "SolventGuid" },
        ]
      },
      {
        name: "Solvent$PrimaryKey",
        unique: true,
        fields: [
          { name: "SolventID" },
        ]
      },
      {
        name: "Solvent$SolventGuid",
        fields: [
          { name: "SolventGuid" },
        ]
      },
    ]
  });
};
