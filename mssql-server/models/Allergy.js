const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Allergy', {
    AllergyID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    ProductGroupID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    AllergyGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    AllergyDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    allPersonCommentID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'PatientComment',
        key: 'PatientCommentID'
      }
    },
    DrugIdentifier: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AllergyType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    alDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'Allergy',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Allergy$AllergyGuid",
        fields: [
          { name: "AllergyGuid" },
        ]
      },
      {
        name: "Allergy$CacheLookup",
        fields: [
          { name: "AllergyDateModified" },
          { name: "AllergyGuid" },
        ]
      },
      {
        name: "Allergy$PersonID",
        fields: [
          { name: "PersonID" },
        ]
      },
      {
        name: "Allergy$PrimaryKey",
        unique: true,
        fields: [
          { name: "AllergyID" },
        ]
      },
    ]
  });
};
