const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AdditionalNames', {
    AdditionalNamesID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    anPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    anTitleID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Title',
        key: 'TitleID'
      }
    },
    anFirstName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    anMiddleName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    anLastName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    AdditionalNamesGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    AdditionalNamesDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    anAlias: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    anDoctorID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Doctor',
        key: 'DoctorID'
      }
    }
  }, {
    sequelize,
    tableName: 'AdditionalNames',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "AdditionalNames$AdditionalNamesGuid",
        fields: [
          { name: "AdditionalNamesGuid" },
        ]
      },
      {
        name: "AdditionalNames$CacheLookup",
        fields: [
          { name: "AdditionalNamesDateModified" },
          { name: "AdditionalNamesGuid" },
        ]
      },
      {
        name: "AdditionalNames$PrimaryKey",
        unique: true,
        fields: [
          { name: "AdditionalNamesID" },
        ]
      },
    ]
  });
};
