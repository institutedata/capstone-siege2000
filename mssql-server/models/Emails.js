const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Emails', {
    EmailsID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EmailTo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EmailCC: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EmailSubject: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EmailMessage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EmailAttachments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    emPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Person',
        key: 'PersonID'
      }
    },
    emDoctorID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Doctor',
        key: 'DoctorID'
      }
    },
    emAccountID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'AccountID'
      }
    },
    EmailDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EmailsGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    EmailsDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    emStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Staff',
        key: 'StaffID'
      }
    },
    EmailSent: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    emSaleID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'Sales',
        key: 'SaleID'
      }
    },
    EmailsRules: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    emEmailTemplateID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'EmailTemplate',
        key: 'EmailTemplateID'
      }
    },
    emStockLocationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'Emails',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Emails$CacheLookup",
        fields: [
          { name: "EmailsDateModified" },
          { name: "EmailsGuid" },
        ]
      },
      {
        name: "Emails$EmailsGuid",
        fields: [
          { name: "EmailsGuid" },
        ]
      },
      {
        name: "PK_Emails",
        unique: true,
        fields: [
          { name: "EmailsID" },
        ]
      },
    ]
  });
};
