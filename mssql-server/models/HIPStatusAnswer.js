const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HIPStatusAnswer', {
    HIPStatusAnswerID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    HIPSAQuestionID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'HIPStatusQuestion',
        key: 'HIPStatusQuestionID'
      }
    },
    HIPSASessionID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'HIPSession',
        key: 'HIPSessionID'
      }
    },
    HIPSAAnswer: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    HIPSAPersonAuditID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'PersonAudit',
        key: 'PersonAuditID'
      }
    },
    HIPStatusAnswerGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    HIPStatusAnswerDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HIPStatusAnswerDateCreated: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'HIPStatusAnswer',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "HIPStatusAnswer$CacheLookup",
        fields: [
          { name: "HIPStatusAnswerDateModified" },
          { name: "HIPStatusAnswerGuid" },
        ]
      },
      {
        name: "HIPStatusAnswer$HIPStatusAnswerGuid",
        fields: [
          { name: "HIPStatusAnswerGuid" },
        ]
      },
      {
        name: "HIPStatusAnswer$PrimaryKey",
        unique: true,
        fields: [
          { name: "HIPStatusAnswerID" },
        ]
      },
    ]
  });
};
