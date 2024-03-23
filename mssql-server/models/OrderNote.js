const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OrderNote', {
    OrderNoteID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OrderNoteGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    OrderNoteDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'OrderNote',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "OrderNote$CacheLookup",
        fields: [
          { name: "OrderNoteDateModified" },
          { name: "OrderNoteGuid" },
        ]
      },
      {
        name: "OrderNote$OrderNoteGuid",
        fields: [
          { name: "OrderNoteGuid" },
        ]
      },
      {
        name: "OrderNote$PrimaryKey",
        unique: true,
        fields: [
          { name: "OrderNoteID" },
        ]
      },
    ]
  });
};
