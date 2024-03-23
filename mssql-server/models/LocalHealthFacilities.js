const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LocalHealthFacilities', {
    LocalHealthFacilitiesID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    lhfHealthFacilitiesID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    LocalHealthFacilitiesGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    LocalHealthFacilitiesDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'LocalHealthFacilities',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_LocalHealthFacilities",
        unique: true,
        fields: [
          { name: "LocalHealthFacilitiesID" },
        ]
      },
    ]
  });
};
