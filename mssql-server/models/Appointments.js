const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Appointments', {
    AppointmentID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    AppointmentDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AppointmentEnd: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AppointmentLocation: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AppointmentStart: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AppointmentSubject: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AppointmentProperties: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AppPersonID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    AppointmentsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    AppointmentsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Appointments',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Appointments$AppointmentsGuid",
        fields: [
          { name: "AppointmentsGuid" },
        ]
      },
      {
        name: "Appointments$AppPersonID",
        fields: [
          { name: "AppPersonID" },
        ]
      },
      {
        name: "Appointments$CacheLookup",
        fields: [
          { name: "AppointmentsDateModified" },
          { name: "AppointmentsGuid" },
        ]
      },
      {
        name: "PK_Appointments",
        unique: true,
        fields: [
          { name: "AppointmentID" },
        ]
      },
    ]
  });
};
