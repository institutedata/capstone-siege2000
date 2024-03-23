const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VaccinationInfo', {
    VaccinationInfoID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    viScriptID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Script',
        key: 'ScriptID'
      }
    },
    EpisodeSequenceID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    viVaccineCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    viVaccineDose: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    viVaccineBatch: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    viVaccineSerialNumber: {
      type: DataTypes.STRING(108),
      allowNull: true
    },
    viVaccinationEncounterID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'VaccinationEncounter',
        key: 'VaccinationEncounterID'
      }
    },
    VaccinationInfoGUID: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    VaccinationInfoDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    viDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    viVaccineExpiryDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'VaccinationInfo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "VaccinationInfo$PrimaryKey",
        unique: true,
        fields: [
          { name: "VaccinationInfoID" },
        ]
      },
    ]
  });
};
