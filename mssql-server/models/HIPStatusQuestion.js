const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HIPStatusQuestion', {
    HIPStatusQuestionID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    HIPQuestion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    HIPQuestionTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HIPQuestionRequired: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    HIPParentQuestionID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'HIPStatusQuestion',
        key: 'HIPStatusQuestionID'
      }
    },
    HIPPersonAuditReasonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'PersonAuditReason',
        key: 'PersonAuditReasonID'
      }
    },
    HIPQuestionData: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    HIPStatusQuestionGuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    HIPStatusQuestionDateModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HIPStatusQuestionDateCreated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DisplayOrder: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    HIPQConditionID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Conditions',
        key: 'ConditionID'
      }
    },
    QuestionPrecondition: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    HIPPersonAuditReasonCondition: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    HIPPersonAuditReasonID2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'PersonAuditReason',
        key: 'PersonAuditReasonID'
      }
    },
    HIPPersonAuditReason2Condition: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ShowSpeachBubble: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    hsqHIPFormID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'HIPForm',
        key: 'HIPFormID'
      }
    },
    HIPLocationType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    hsqMasterCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    SpanAcrossEntirePage: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    LinkFollowingQuestionToThisQuestion: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'HIPStatusQuestion',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "HIPStatusQuestion$CacheLookup",
        fields: [
          { name: "HIPStatusQuestionDateModified" },
          { name: "HIPStatusQuestionGuid" },
        ]
      },
      {
        name: "HIPStatusQuestion$HIPStatusQuestionGuid",
        fields: [
          { name: "HIPStatusQuestionGuid" },
        ]
      },
      {
        name: "HIPStatusQuestion$PrimaryKey",
        unique: true,
        fields: [
          { name: "HIPStatusQuestionID" },
        ]
      },
    ]
  });
};
