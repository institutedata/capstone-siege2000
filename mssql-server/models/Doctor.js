const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Doctor', {
    DoctorID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FirstName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    LastName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TitleID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Title',
        key: 'TitleID'
      }
    },
    Address: {
      type: DataTypes.STRING(210),
      allowNull: true
    },
    Suburb: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    City: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PostCode: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PhoneNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MobileNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FaxNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    EMailAddress: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PrescriberID: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DoctorCode: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    PracticeID: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    GroupID: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Specialist: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    HealthProfCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    RuralDoctor: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    DoctorGUID: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DateCreated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DateUpdated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    GenericAgreement: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    PHOEnrolled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    GADate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DocErxSystem: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    EntityID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    HealthPractitionerID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    HealthFacilityID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    HLEntityID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    DoctorUnitNumber: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    DoctorStreetNumber: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PracticeName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    dctConvID: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dctAlias: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dctMiddleName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dctAddress2: {
      type: DataTypes.STRING(210),
      allowNull: true
    },
    dctBuildingName: {
      type: DataTypes.STRING(210),
      allowNull: true
    },
    dctStateID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dctCountryID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    HPIIValidated: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    dctHPIIVersion: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    dctHPIOVersion: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    dctOfficialFirstName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dctOfficialLastName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PrescribingSystem: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PrescribingSystemVersion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    docHealthFacilityID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'Doctor',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Doctor$CacheLookup",
        fields: [
          { name: "DateUpdated" },
          { name: "DoctorGUID" },
        ]
      },
      {
        name: "Doctor$dctConvID",
        fields: [
          { name: "dctConvID" },
        ]
      },
      {
        name: "Doctor$DoctorGUID",
        fields: [
          { name: "DoctorGUID" },
        ]
      },
      {
        name: "Doctor$FirstName",
        fields: [
          { name: "FirstName" },
        ]
      },
      {
        name: "Doctor$HealthProfCode",
        fields: [
          { name: "HealthProfCode" },
        ]
      },
      {
        name: "Doctor$LastName",
        fields: [
          { name: "LastName" },
        ]
      },
      {
        name: "Doctor$PrescriberID",
        fields: [
          { name: "PrescriberID" },
        ]
      },
      {
        name: "Doctor$PrimaryKey",
        unique: true,
        fields: [
          { name: "DoctorID" },
        ]
      },
      {
        name: "Doctor$Suburb",
        fields: [
          { name: "Suburb" },
        ]
      },
      {
        name: "Doctor$TitleID",
        fields: [
          { name: "TitleID" },
        ]
      },
    ]
  });
};
