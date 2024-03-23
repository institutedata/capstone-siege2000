const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VaccinationEncounter', {
    VaccinationEncounterID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ClaimSequenceNumber: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    VaccinationEncounterGUID: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    VaccinationEncounterDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VaccineSchoolID: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    veDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    veClaimID: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'VaccinationEncounter',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "VaccinationEncounter$PrimaryKey",
        unique: true,
        fields: [
          { name: "VaccinationEncounterID" },
        ]
      },
    ]
  });
};
