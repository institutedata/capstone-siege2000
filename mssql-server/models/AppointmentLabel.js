const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AppointmentLabel', {
    AppointmentLabelID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    AppointmentLabel: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    alDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    AppointmentLabelGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    AppointmentLabelDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    alMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    alAppointmentLabelType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: -1
    }
  }, {
    sequelize,
    tableName: 'AppointmentLabel',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "AppointmentLabel$AppointmentLabelGuid",
        fields: [
          { name: "AppointmentLabelGuid" },
        ]
      },
      {
        name: "AppointmentLabel$CacheLookup",
        fields: [
          { name: "AppointmentLabelDateModified" },
          { name: "AppointmentLabelGuid" },
        ]
      },
      {
        name: "PK_AppointmentLabel",
        unique: true,
        fields: [
          { name: "AppointmentLabelID" },
        ]
      },
    ]
  });
};
