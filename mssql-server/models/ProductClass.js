const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductClass', {
    ProductClassID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ProductClassName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    pcDateModified: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    HOProductClassID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ProductClassGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    pcOtherDetails: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ProductClass',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ProductClass$CacheLookup",
        fields: [
          { name: "pcDateModified" },
          { name: "ProductClassGuid" },
        ]
      },
      {
        name: "ProductClass$pcDateModified",
        fields: [
          { name: "pcDateModified" },
        ]
      },
      {
        name: "ProductClass$PrimaryKey",
        unique: true,
        fields: [
          { name: "ProductClassID" },
        ]
      },
      {
        name: "ProductClass$ProductClassGuid",
        fields: [
          { name: "ProductClassGuid" },
        ]
      },
    ]
  });
};
