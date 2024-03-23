const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RouteOfAdministration', {
    RouteOfAdministrationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    RouteOfAdministration: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    roaDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    RouteOfAdministrationGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    RouteOfAdministrationDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    roaMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'RouteOfAdministration',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_RouteOfAdministration",
        unique: true,
        fields: [
          { name: "RouteOfAdministrationID" },
        ]
      },
      {
        name: "RouteOfAdministration$CacheLookup",
        fields: [
          { name: "RouteOfAdministrationDateModified" },
          { name: "RouteOfAdministrationGuid" },
        ]
      },
    ]
  });
};
