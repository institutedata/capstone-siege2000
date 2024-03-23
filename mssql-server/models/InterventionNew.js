const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('InterventionNew', {
    InterventionNewID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    itScriptID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Script',
        key: 'ScriptID'
      }
    },
    TimeTakenInMinutes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Comment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PrescriberContacted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    itPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    InterventionTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    InterventionGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    InterventionDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    itDoctorID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Doctor',
        key: 'DoctorID'
      }
    },
    itDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    itInterventionReasonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    itInterventionGradeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    itInterventionRecommendationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'InterventionNew',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Intervention$InterventionNewID",
        fields: [
          { name: "InterventionNewID" },
        ]
      },
      {
        name: "InterventionNew$CacheLookup",
        fields: [
          { name: "InterventionDateModified" },
          { name: "InterventionGuid" },
        ]
      },
      {
        name: "InterventionNew$InterventionGuid",
        fields: [
          { name: "InterventionGuid" },
        ]
      },
      {
        name: "InterventionNew$InterventionTime",
        fields: [
          { name: "InterventionTime" },
        ]
      },
      {
        name: "InterventionNew$itPersonID",
        fields: [
          { name: "itPersonID" },
        ]
      },
      {
        name: "InterventionNew$itScriptID",
        fields: [
          { name: "itScriptID" },
        ]
      },
      {
        name: "InterventionNew$PrimaryKey",
        unique: true,
        fields: [
          { name: "InterventionNewID" },
        ]
      },
    ]
  });
};
