const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ShelfLocation', {
    ShelfLocationID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ShelfLocation: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ShelfLocationGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ShelfLocationDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ShelfLocation',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ShelfLocation",
        unique: true,
        fields: [
          { name: "ShelfLocationID" },
        ]
      },
      {
        name: "ShelfLocation$CacheLookup",
        fields: [
          { name: "ShelfLocationDateModified" },
          { name: "ShelfLocationGuid" },
        ]
      },
      {
        name: "ShelfLocation$ShelfLocation",
        unique: true,
        fields: [
          { name: "ShelfLocation" },
        ]
      },
      {
        name: "ShelfLocation$ShelfLocationGuid",
        fields: [
          { name: "ShelfLocationGuid" },
        ]
      },
    ]
  });
};
