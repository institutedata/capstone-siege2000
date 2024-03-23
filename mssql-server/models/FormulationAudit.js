const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FormulationAudit', {
    FormulationAuditID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    faFormulationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Formulation',
        key: 'FormulationID'
      }
    },
    faStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    faReasonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'FormulationAuditReason',
        key: 'FormulationAuditReasonID'
      }
    },
    AuditDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FormulationAuditGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    faDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    faEventStatusID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'EventStatus',
        key: 'EventStatusID'
      }
    },
    faEmailID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Emails',
        key: 'EmailsID'
      }
    },
    faCommentID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'FormulationAuditComment',
        key: 'FormulationAuditCommentID'
      }
    },
    faEventStartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    faEventDueDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    faEventPriorityID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    faEventStaffGroupID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'StaffGroup',
        key: 'StaffGroupID'
      }
    }
  }, {
    sequelize,
    tableName: 'FormulationAudit',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Formulation$PrimaryKey",
        unique: true,
        fields: [
          { name: "FormulationAuditID" },
        ]
      },
      {
        name: "FormulationAudit$AuditDate",
        fields: [
          { name: "AuditDate" },
        ]
      },
      {
        name: "FormulationAudit$faEventStartDate",
        fields: [
          { name: "AuditDate" },
          { name: "faEventStartDate" },
          { name: "faEventStatusID" },
        ]
      },
      {
        name: "FormulationAudit$faFormulationID",
        fields: [
          { name: "faFormulationID" },
        ]
      },
      {
        name: "FormulationAudit$faReasonID",
        fields: [
          { name: "faReasonID" },
        ]
      },
    ]
  });
};
