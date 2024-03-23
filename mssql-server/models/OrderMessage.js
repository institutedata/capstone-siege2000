const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OrderMessage', {
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
    OrderMessageGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    OrderMessageDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'OrderMessage',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "OrderMessage$CacheLookup",
        fields: [
          { name: "OrderMessageDateModified" },
          { name: "OrderMessageGuid" },
        ]
      },
      {
        name: "OrderMessage$OrderMessageGuid",
        fields: [
          { name: "OrderMessageGuid" },
        ]
      },
      {
        name: "OrderMessage$PrimaryKey",
        unique: true,
        fields: [
          { name: "OrderNoteID" },
        ]
      },
    ]
  });
};
