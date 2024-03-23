const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProgramLog', {
    ProgramLogID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TheDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    plUnitID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Computer',
        key: 'UnitID'
      }
    },
    TheReason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ProgramLogGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ProgramLogDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    verNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    AppName: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ProgramLog',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ProgramLog",
        unique: true,
        fields: [
          { name: "ProgramLogID" },
        ]
      },
      {
        name: "ProgramLog$CacheLookup",
        fields: [
          { name: "ProgramLogDateModified" },
          { name: "ProgramLogGuid" },
        ]
      },
      {
        name: "ProgramLog$ProgramLogGuid",
        fields: [
          { name: "ProgramLogGuid" },
        ]
      },
    ]
  });
};
