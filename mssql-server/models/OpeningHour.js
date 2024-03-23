const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OpeningHour', {
    OpeningDayID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    OpeningDay: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OpeningTime: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ClosingTime: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ChargeEntireDay: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    OpeningHourGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    OpeningHourDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'OpeningHour',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "OpeningHour$CacheLookup",
        fields: [
          { name: "OpeningHourDateModified" },
          { name: "OpeningHourGuid" },
        ]
      },
      {
        name: "OpeningHour$OpeningDayID",
        fields: [
          { name: "OpeningDayID" },
        ]
      },
      {
        name: "OpeningHour$OpeningHourGuid",
        fields: [
          { name: "OpeningHourGuid" },
        ]
      },
      {
        name: "OpeningHour$PrimaryKey",
        unique: true,
        fields: [
          { name: "OpeningDayID" },
        ]
      },
    ]
  });
};
