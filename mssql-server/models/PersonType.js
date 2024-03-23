const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PersonType', {
    PersonTypeID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PersonType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ptDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ptMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    NHINumberRequired: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    RestHomePatientType: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ptPriceOptionToUse: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ptCardTypeIDRequired: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SendToEAR: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ptAssessmentScoreRequired: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PersonTypeGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PersonTypeDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RequiresParentRego: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ptCohort: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PersonType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PersonType$CacheLookup",
        fields: [
          { name: "PersonTypeDateModified" },
          { name: "PersonTypeGuid" },
        ]
      },
      {
        name: "PersonType$PersonTypeGuid",
        fields: [
          { name: "PersonTypeGuid" },
        ]
      },
      {
        name: "PK_PersonType",
        unique: true,
        fields: [
          { name: "PersonTypeID" },
        ]
      },
    ]
  });
};
