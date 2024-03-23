const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PersonRegistrations', {
    PersonRegistrationsID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    prPersonType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'PersonType',
        key: 'PersonTypeID'
      }
    },
    prStartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    prEndDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    prLTCEntryCodeID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    prLTCExitCodeID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    prSentToServer: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    prPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    PersonRegistrationsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PersonRegistrationsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ParentRegistration: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ChildRegistrationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    prNHINumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    prClaimID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    prContractID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'PersonRegistrations',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PersonRegistrations$CacheLookup",
        fields: [
          { name: "PersonRegistrationsDateModified" },
          { name: "PersonRegistrationsGuid" },
        ]
      },
      {
        name: "PersonRegistrations$ChildRegistrationID",
        fields: [
          { name: "ChildRegistrationID" },
        ]
      },
      {
        name: "PersonRegistrations$PersonRegistrationsGuid",
        fields: [
          { name: "PersonRegistrationsGuid" },
        ]
      },
      {
        name: "PersonRegistrations$prPersonID",
        fields: [
          { name: "prPersonID" },
        ]
      },
      {
        name: "PK_PersonRegistrations",
        unique: true,
        fields: [
          { name: "PersonRegistrationsID" },
        ]
      },
    ]
  });
};
