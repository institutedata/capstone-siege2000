const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Notes', {
    NoteID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NoteType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    StaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    Date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    NotesGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    NotesDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Notes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Notes$CacheLookup",
        fields: [
          { name: "NotesDateModified" },
          { name: "NotesGuid" },
        ]
      },
      {
        name: "Notes$NoteID",
        unique: true,
        fields: [
          { name: "NoteID" },
        ]
      },
      {
        name: "Notes$NotesGuid",
        fields: [
          { name: "NotesGuid" },
        ]
      },
      {
        name: "Notes$StaffID",
        fields: [
          { name: "StaffID" },
        ]
      },
      {
        name: "PK_Notes",
        unique: true,
        fields: [
          { name: "NoteID" },
        ]
      },
    ]
  });
};
