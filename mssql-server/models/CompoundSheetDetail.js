const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CompoundSheetDetail', {
    CompoundSheetID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Column1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Column2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Column3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Column4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CompoundSheetDetailGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    CompoundSheetDetailDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CompoundSheetDetail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "CompoundSheetDetail$PrimaryKey",
        unique: true,
        fields: [
          { name: "CompoundSheetID" },
        ]
      },
    ]
  });
};
