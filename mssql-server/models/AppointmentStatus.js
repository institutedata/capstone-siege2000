const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AppointmentStatus', {
    AppointmentStatusID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    AppointmentStatus: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    asDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    AppointmentStatusGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    AppointmentStatusDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    asMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'AppointmentStatus',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "AppointmentStatus$AppointmentStatusGuid",
        fields: [
          { name: "AppointmentStatusGuid" },
        ]
      },
      {
        name: "AppointmentStatus$CacheLookup",
        fields: [
          { name: "AppointmentStatusDateModified" },
          { name: "AppointmentStatusGuid" },
        ]
      },
      {
        name: "PK_AppointmentStatus",
        unique: true,
        fields: [
          { name: "AppointmentStatusID" },
        ]
      },
    ]
  });
};
