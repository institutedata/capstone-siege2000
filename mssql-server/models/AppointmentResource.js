const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AppointmentResource', {
    AppointmentResourceID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    AppointmentResource: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    arDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    AppointmentResourceGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    AppointmentResourceDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    arMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'AppointmentResource',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "AppointmentResource$AppointmentResourceGuid",
        fields: [
          { name: "AppointmentResourceGuid" },
        ]
      },
      {
        name: "AppointmentResource$CacheLookup",
        fields: [
          { name: "AppointmentResourceDateModified" },
          { name: "AppointmentResourceGuid" },
        ]
      },
      {
        name: "PK_AppointmentResource",
        unique: true,
        fields: [
          { name: "AppointmentResourceID" },
        ]
      },
    ]
  });
};
