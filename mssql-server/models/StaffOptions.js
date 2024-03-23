const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StaffOptions', {
    StaffOptionsID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    soStaffID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    soVBName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    soValue: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    StaffOptionsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    StaffOptionsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'StaffOptions',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_StaffOptions",
        unique: true,
        fields: [
          { name: "soStaffID" },
          { name: "soVBName" },
        ]
      },
      {
        name: "StaffOptions$CacheLookup",
        fields: [
          { name: "StaffOptionsDateModified" },
          { name: "StaffOptionsGuid" },
        ]
      },
      {
        name: "StaffOptions$StaffOptionsGuid",
        fields: [
          { name: "StaffOptionsGuid" },
        ]
      },
      {
        name: "StaffOptions$StaffOptionsID",
        unique: true,
        fields: [
          { name: "StaffOptionsID" },
        ]
      },
    ]
  });
};
