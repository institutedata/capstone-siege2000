const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HIPAnswerToPersonAudit', {
    HIPAnswerToPersonAuditID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    HIPAPPersonAuditID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'PersonAudit',
        key: 'PersonAuditID'
      }
    },
    HIPAPHipAnswerID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'HIPStatusAnswer',
        key: 'HIPStatusAnswerID'
      }
    },
    HIPAnswerToPersonAuditGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    HIPAnswerToPersonAuditDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HIPAnswerToPersonAuditDateCreated: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'HIPAnswerToPersonAudit',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "HIPAnswerToPersonAudit$CacheLookup",
        fields: [
          { name: "HIPAnswerToPersonAuditDateModified" },
          { name: "HIPAnswerToPersonAuditGuid" },
        ]
      },
      {
        name: "HIPAnswerToPersonAudit$HIPAnswerToPersonAuditGuid",
        fields: [
          { name: "HIPAnswerToPersonAuditGuid" },
        ]
      },
      {
        name: "HIPAnswerToPersonAudit$PersonAuditHIPAnswer",
        unique: true,
        fields: [
          { name: "HIPAPPersonAuditID" },
          { name: "HIPAPHipAnswerID" },
        ]
      },
      {
        name: "PK_HIPAnswerToPersonAudit",
        unique: true,
        fields: [
          { name: "HIPAnswerToPersonAuditID" },
        ]
      },
    ]
  });
};
