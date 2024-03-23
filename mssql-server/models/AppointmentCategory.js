const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AppointmentCategory', {
    AppointmentCategoryID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    AppointmentCategory: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    acDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    AppointmentCategoryGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    AppointmentCategoryDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    acMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'AppointmentCategory',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "AppointmentCategory$AppointmentCategoryGuid",
        fields: [
          { name: "AppointmentCategoryGuid" },
        ]
      },
      {
        name: "AppointmentCategory$CacheLookup",
        fields: [
          { name: "AppointmentCategoryDateModified" },
          { name: "AppointmentCategoryGuid" },
        ]
      },
      {
        name: "PK_AppointmentCategory",
        unique: true,
        fields: [
          { name: "AppointmentCategoryID" },
        ]
      },
    ]
  });
};
